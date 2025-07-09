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
-keep class com.tencent.mmkv.** { *; }
-dontwarn com.tencent.mmkv.**
-keepclassmembers class com.tencent.mmkv.MMKV {
    long nativeHandle;
    private static *** onMMKVCRCCheckFail(***);
    private static *** onMMKVFileLengthError(***);
    private static *** mmkvLogImp(...);
    private static *** onContentChangedByOuterProcess(***);
}

# Additional MMKV rules for release builds
-keep class com.tencent.mmkv.MMKVLogLevel { *; }
-keep class com.tencent.mmkv.MMKVRecoverStrategic { *; }
-keep class com.tencent.mmkv.NativeBuffer { *; }
-keepclassmembers class com.tencent.mmkv.NativeBuffer {
    long pointer;
    int size;
}

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
