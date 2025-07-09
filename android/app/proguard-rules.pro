# === Core React Native ===
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# === Hermes (JS Engine) ===
-keep class com.facebook.hermes.** { *; }
-dontwarn com.facebook.hermes.**

# === Keep main Application and Activity classes ===
-keep class com.bus_booking.MainApplication { *; }
-keep class com.bus_booking.MainActivity { *; }

# === Keep app-specific model classes (serialization/deserialization) ===
-keep class com.bus_booking.** { *; }

# === Gson (if used for JSON serialization) ===
-keepattributes *Annotation*
-keep class sun.misc.Unsafe { *; }
-keep class com.google.gson.** { *; }
-dontwarn com.google.gson.**

# === MMKV (React Native MMKV) ===
-keep class com.rnmmkv.** { *; }
-dontwarn com.rnmmkv.**

# === Reanimated (React Native Reanimated) ===
-keep class com.swmansion.reanimated.** { *; }
-dontwarn com.swmansion.reanimated.**

# === SVG (if using react-native-svg or heroicons) ===
-keep class com.horcrux.svg.** { *; }
-dontwarn com.horcrux.svg.**

# === Networking (Retrofit, OkHttp, Kotlin stdlib, etc.) ===
-dontwarn okhttp3.**
-dontwarn retrofit2.**
-dontwarn okio.**
-dontwarn javax.annotation.**
-dontwarn kotlin.**
-dontwarn org.codehaus.mojo.animal_sniffer.*
-dontwarn com.google.errorprone.annotations.*
-dontwarn dagger.**

# === Keep all class members (for inner classes, event emitters, etc.) ===
-keepclassmembers class * {
    *;
}
