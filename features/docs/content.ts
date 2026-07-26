export type SdkLanguage = "swift" | "kotlin" | "flutter";

export const SDK_GUIDES: Record<
  SdkLanguage,
  { label: string; code: string }
> = {
  swift: {
    label: "iOS (Swift)",
    code: `import Subkit

Subkit.configure(
    apiKey: "sb_public_REPLACE_ME",
    userId: "user_90412"
)

Subkit.shared.getOfferings { offerings, error in
    guard let offerings, error == nil else { return }
    print(offerings)
}`,
  },
  kotlin: {
    label: "Android (Kotlin)",
    code: `import io.subkit.sdk.Subkit

Subkit.configure(
    context = this,
    apiKey = "sb_public_REPLACE_ME",
    userId = "user_90412"
)

Subkit.shared.getOfferings { offerings, error ->
    if (error == null) println(offerings)
}`,
  },
  flutter: {
    label: "Flutter",
    code: `import 'package:subkit_flutter/subkit_flutter.dart';

await Subkit.configure(
  apiKey: "sb_public_REPLACE_ME",
  userId: "user_90412"
);

final offerings = await Subkit.getOfferings();
print(offerings);`,
  },
};

export const API_CONTRACT_PREVIEW = `GET /v1/pricing
GET /v1/roadmap
GET /v1/status`;
