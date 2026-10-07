package expo.modules.playgames

import android.content.pm.PackageManager
import com.google.android.gms.games.PlayGames
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

// Ponte mínima para o Google Play Games (v2): login automático e conquistas.
// O SDK se inicializa sozinho; o plugin (app.plugin.js) só o liga quando há projectId.
class PlayGamesModule : Module() {
  private val configured: Boolean by lazy {
    val ctx = appContext.reactContext ?: return@lazy false
    try {
      val info = ctx.packageManager.getApplicationInfo(ctx.packageName, PackageManager.GET_META_DATA)
      !info.metaData?.getString("com.google.android.gms.games.APP_ID").isNullOrBlank()
    } catch (_: Exception) {
      false
    }
  }

  override fun definition() = ModuleDefinition {
    Name("PlayGames")

    Function("isConfigured") { configured }

    AsyncFunction("isAuthenticated") { promise: Promise ->
      val activity = appContext.currentActivity
      if (!configured || activity == null) return@AsyncFunction promise.resolve(false)
      PlayGames.getGamesSignInClient(activity).isAuthenticated
        .addOnSuccessListener { promise.resolve(it.isAuthenticated) }
        .addOnFailureListener { promise.resolve(false) }
    }

    AsyncFunction("signIn") { promise: Promise ->
      val activity = appContext.currentActivity
      if (!configured || activity == null) return@AsyncFunction promise.resolve(false)
      PlayGames.getGamesSignInClient(activity).signIn()
        .addOnSuccessListener { promise.resolve(it.isAuthenticated) }
        .addOnFailureListener { promise.resolve(false) }
    }

    // unlock/setSteps ficam na fila do Play Games e são enviados quando houver internet.
    Function("unlock") { id: String ->
      val activity = appContext.currentActivity
      if (configured && activity != null) PlayGames.getAchievementsClient(activity).unlock(id)
    }

    Function("setSteps") { id: String, steps: Int ->
      val activity = appContext.currentActivity
      if (configured && activity != null && steps > 0) {
        PlayGames.getAchievementsClient(activity).setSteps(id, steps)
      }
    }

    AsyncFunction("showAchievements") { promise: Promise ->
      val activity = appContext.currentActivity
      if (!configured || activity == null) return@AsyncFunction promise.resolve(false)
      PlayGames.getAchievementsClient(activity).achievementsIntent
        .addOnSuccessListener { intent ->
          activity.startActivityForResult(intent, RC_ACHIEVEMENTS)
          promise.resolve(true)
        }
        .addOnFailureListener { promise.resolve(false) }
    }
  }

  companion object {
    private const val RC_ACHIEVEMENTS = 9003
  }
}
