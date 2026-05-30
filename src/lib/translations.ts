export type Lang =
  | "ko" | "en" | "ja" | "zh-CN" | "ar" | "ru" | "it" | "de" | "fr" | "pt-BR" | "es";

export interface Translation {
  nav: {
    tagline: string;
    apps: string;
    pricing: string;
    contact: string;
  };
  hero: {
    badge: string;
    h1: [string, string];
    desc: string;
    cta1: string;
    cta2: string;
  };
  apps: {
    heading: string;
    macxplorer: {
      subtitle: string;
      desc: string;
      features: string[];
      cta: string;
    };
    mactrl: {
      subtitle: string;
      desc: string;
      features: string[];
      cta: string;
    };
    macsnap: {
      subtitle: string;
      desc: string;
      features: string[];
      cta: string;
    };
  };
  screenshots: {
    macxplorerHeading: string;
    macxplorerSubtitle: string;
    mactrlHeading: string;
    mactrlSubtitle: string;
    macsnapHeading: string;
    macsnapSubtitle: string;
  };
  features: {
    heading: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  testimonials: {
    heading: string;
    items: { name: string; role: string; avatar: string; quote: string }[];
  };
  pricing: {
    heading: string;
    subtitle: string;
    plans: {
      macxplorer: { description: string; features: string[]; cta: string };
      bundle: { description: string; features: string[]; badge: string; cta: string };
      mactrl: { description: string; features: string[]; cta: string };
      macsnap: { description: string; features: string[]; cta: string };
    };
  };
  footer: {
    privacy: string;
    terms: string;
    refund: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

const en: Translation = {
  nav: {
    tagline: "making mac feel like windows.",
    apps: "Apps",
    pricing: "Pricing",
    contact: "Contact",
  },
  hero: {
    badge: "Made for Mac",
    h1: ["The comfort of Windows.", "The beauty of macOS."],
    desc: "Focused apps that bring the best of Windows into macOS — without sacrificing the Mac experience you love.",
    cta1: "Explore Apps",
    cta2: "Get the Bundle — $8",
  },
  apps: {
    heading: "Our Apps",
    macxplorer: {
      subtitle: "File Manager · $5",
      desc: "The Windows Explorer experience, faithfully rebuilt for Mac. Cut & Move, AirDrop, SMB network drives — everything you've been missing.",
      features: ["Windows Explorer layout", "Cut & Move files", "AirDrop support", "SMB network support", "10 languages"],
      cta: "Buy MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Key Remapper · $5",
      desc: "Instantly swap Command and Control keys so your Windows muscle memory works on Mac. Set per-app rules to keep the right shortcuts in every app.",
      features: ["Instant key swap", "Per-app whitelist / blacklist", "Lightweight & native", "11 languages"],
      cta: "Buy MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Window Snapper · $5",
      desc: "Windows-style Snap Layouts, faithfully built for Mac. Snap windows to halves, thirds, or corners instantly — just like you do on Windows.",
      features: ["Windows Snap Layout style", "Multi-display support", "Lightweight & native", "11 languages"],
      cta: "Buy MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer in Action",
    macxplorerSubtitle: "See the real app before you buy.",
    mactrlHeading: "MaCtrl in Action",
    mactrlSubtitle: "Menu bar toggle, whitelist, and blacklist — all in one lightweight app.",
    macsnapHeading: "MacSnap in Action",
    macsnapSubtitle: "Snap windows exactly like Windows.",
  },
  features: {
    heading: "Why choose Sprout Studio apps?",
    subtitle: "Built for people who work across Windows and Mac every day.",
    items: [
      { title: "Familiar Interface", desc: "Windows Explorer-style two-pane layout that feels instantly at home on macOS." },
      { title: "Smart Key Control", desc: "Swap Command and Control on the fly — per-app rules mean no more wrong shortcuts." },
      { title: "Multilingual Support", desc: "Fully localized in 10–11 languages so every user gets a native experience." },
      { title: "Lightning Fast", desc: "Built with native macOS frameworks. Launches instantly, stays out of the way." },
      { title: "Safe & Private", desc: "No telemetry, no accounts, no subscriptions. Your data stays on your machine." },
      { title: "One-Time Purchase", desc: "Pay once and use forever. No recurring fees, ever." },
    ],
  },
  testimonials: {
    heading: "What users are saying",
    items: [
      {
        name: "Sarah Chen",
        role: "Software Developer",
        avatar: "SC",
        quote: "MacXplorer finally makes me feel at home on my Mac. Cut & Move alone saved me hours — I can't believe it wasn't built in.",
      },
      {
        name: "Mike Rodriguez",
        role: "Graphic Designer",
        avatar: "MR",
        quote: "MaCtrl is a lifesaver. I switch between Windows and Mac every day, and now my muscle memory actually works on both.",
      },
      {
        name: "Alex Thompson",
        role: "Business Analyst",
        avatar: "AT",
        quote: "The bundle is a no-brainer at $8. Both apps are polished, lightweight, and just work. Highly recommended for anyone coming from Windows.",
      },
    ],
  },
  pricing: {
    heading: "Simple, one-time pricing",
    subtitle: "Pay once. No subscriptions, no hidden fees.",
    plans: {
      macxplorer: {
        description: "Windows Explorer-style file manager for Mac",
        features: ["Windows Explorer layout", "Cut & Move files natively", "SMB network drive support", "10 languages"],
        cta: "Buy MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl together",
        features: ["Everything in MacXplorer", "Everything in MaCtrl", "Save 20% vs. buying separately", "One-time payment"],
        badge: "Best Value",
        cta: "Buy Bundle — $8",
      },
      mactrl: {
        description: "Command ↔ Control key swap for Mac",
        features: ["Instant key swap toggle", "Per-app whitelist / blacklist", "Lightweight & native", "11 languages"],
        cta: "Buy MaCtrl — $5",
      },
      macsnap: {
        description: "Windows-style Snap Layouts for Mac",
        features: ["Snap to halves, thirds & corners", "Multi-display support", "11 languages"],
        cta: "Buy MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy",
  },
  meta: {
    title: "Sprout Studio — Mac Apps for Windows Users | MacXplorer, MaCtrl & MacSnap",
    description: "The best macbook essential apps for anyone switching from Windows to Mac. MacXplorer brings Windows Explorer to macOS, MaCtrl remaps your keys, MacSnap adds Snap Layouts. Mac apps for windows users — one-time purchase.",
  },
};

const ko: Translation = {
  nav: {
    tagline: "맥을 윈도우처럼 편리하게.",
    apps: "앱",
    pricing: "가격",
    contact: "문의",
  },
  hero: {
    badge: "Mac 전용",
    h1: ["윈도우의 편안함.", "macOS의 아름다움."],
    desc: "Windows의 장점을 macOS에 그대로 — 소중한 Mac 경험은 그대로 유지하면서.",
    cta1: "앱 살펴보기",
    cta2: "번들 구매하기 — $8",
  },
  apps: {
    heading: "우리의 앱",
    macxplorer: {
      subtitle: "파일 관리자 · $5",
      desc: "Windows 탐색기 경험을 Mac에 충실히 재현했습니다. 잘라내기 & 이동, AirDrop, SMB 네트워크 드라이브 — 부족했던 모든 것을.",
      features: ["Windows 탐색기 레이아웃", "파일 잘라내기 & 이동", "AirDrop 지원", "SMB 네트워크 지원", "10개 언어"],
      cta: "MacXplorer 구매하기 — $5",
    },
    mactrl: {
      subtitle: "키 리매퍼 · $5",
      desc: "Command와 Control 키를 즉시 교환해 Windows 근육 기억이 Mac에서도 작동합니다. 앱별 규칙으로 모든 앱에서 올바른 단축키를 사용하세요.",
      features: ["즉시 키 교환", "앱별 화이트리스트 / 블랙리스트", "가볍고 네이티브", "11개 언어"],
      cta: "MaCtrl 구매하기 — $5",
    },
    macsnap: {
      subtitle: "윈도우 스냅 · $5",
      desc: "Windows 스냅 레이아웃을 Mac에 충실히 재현했습니다. 창을 절반, 삼분의 일, 모서리에 즉시 스냅 — Windows에서 하던 그대로.",
      features: ["Windows 스냅 레이아웃 스타일", "다중 디스플레이 지원", "가볍고 네이티브", "11개 언어"],
      cta: "MacSnap 구매하기 — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer 실제 화면",
    macxplorerSubtitle: "구매 전 실제 앱을 확인하세요.",
    mactrlHeading: "MaCtrl 실제 화면",
    mactrlSubtitle: "메뉴 바 토글, 화이트리스트, 블랙리스트 — 하나의 가벼운 앱으로.",
    macsnapHeading: "MacSnap 실제 화면",
    macsnapSubtitle: "Windows처럼 창을 스냅하세요.",
  },
  features: {
    heading: "왜 Sprout Studio 앱인가요?",
    subtitle: "매일 Windows와 Mac을 오가며 일하는 분들을 위해 만들었습니다.",
    items: [
      { title: "익숙한 인터페이스", desc: "macOS에서 즉시 편안함을 느낄 수 있는 Windows 탐색기 스타일 두 패널 레이아웃." },
      { title: "스마트 키 제어", desc: "즉석에서 Command와 Control 교환 — 앱별 규칙으로 잘못된 단축키 없음." },
      { title: "다국어 지원", desc: "10~11개 언어로 완전 현지화되어 모든 사용자가 네이티브 경험을 누립니다." },
      { title: "빠른 속도", desc: "네이티브 macOS 프레임워크로 제작. 즉시 실행되며 방해가 없습니다." },
      { title: "안전하고 사적", desc: "텔레메트리 없음, 계정 없음, 구독 없음. 데이터는 내 기기에." },
      { title: "일회성 구매", desc: "한 번 결제하고 영원히 사용. 반복 요금 없음." },
    ],
  },
  testimonials: {
    heading: "사용자 후기",
    items: [
      {
        name: "Sarah Chen",
        role: "소프트웨어 개발자",
        avatar: "SC",
        quote: "MacXplorer 덕분에 Mac이 집처럼 편해졌어요. 잘라내기 & 이동만으로도 시간이 절약됩니다 — 기본 내장이 아닌 게 믿기지 않을 정도예요.",
      },
      {
        name: "Mike Rodriguez",
        role: "그래픽 디자이너",
        avatar: "MR",
        quote: "MaCtrl은 구원자예요. 매일 Windows와 Mac을 오가는데, 이제 근육 기억이 두 OS 모두에서 제대로 작동합니다.",
      },
      {
        name: "Alex Thompson",
        role: "비즈니스 분석가",
        avatar: "AT",
        quote: "$8에 번들은 고민할 필요도 없어요. 두 앱 모두 완성도 높고 가볍고 잘 작동합니다. Windows에서 넘어오는 분에게 강력 추천.",
      },
    ],
  },
  pricing: {
    heading: "간단한 일회성 가격",
    subtitle: "한 번 결제. 구독 없음, 숨겨진 요금 없음.",
    plans: {
      macxplorer: {
        description: "Mac을 위한 Windows 탐색기 스타일 파일 관리자",
        features: ["Windows 탐색기 레이아웃", "파일 잘라내기 & 이동", "SMB 네트워크 드라이브 지원", "10개 언어"],
        cta: "MacXplorer 구매 — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl 함께",
        features: ["MacXplorer의 모든 기능", "MaCtrl의 모든 기능", "개별 구매 대비 20% 절약", "일회성 결제"],
        badge: "최고의 가치",
        cta: "번들 구매 — $8",
      },
      mactrl: {
        description: "Mac용 Command ↔ Control 키 교환",
        features: ["즉시 키 교환 토글", "앱별 화이트리스트 / 블랙리스트", "가볍고 네이티브", "11개 언어"],
        cta: "MaCtrl 구매 — $5",
      },
      macsnap: {
        description: "Mac을 위한 Windows 스냅 레이아웃",
        features: ["절반·삼분의 일·모서리 스냅", "다중 디스플레이 지원", "11개 언어"],
        cta: "MacSnap 구매 — $5",
      },
    },
  },
  footer: {
    privacy: "개인정보처리방침",
    terms: "이용약관",
    refund: "환불 정책",
  },
  meta: {
    title: "Sprout Studio — 맥북 필수 앱 | MacXplorer, MaCtrl & MacSnap",
    description: "윈도우에서 맥으로 넘어온 분들을 위한 맥북 초기 설정 필수 앱. MacXplorer로 Windows 탐색기를, MaCtrl로 단축키를, MacSnap으로 스냅 레이아웃을 그대로 — 일회성 구매.",
  },
};

const ja: Translation = {
  nav: {
    tagline: "MacをWindowsのように快適に。",
    apps: "アプリ",
    pricing: "価格",
    contact: "お問い合わせ",
  },
  hero: {
    badge: "Mac専用",
    h1: ["Windowsの快適さ。", "macOSの美しさ。"],
    desc: "WindowsのベストをmacOSへ — 愛着のあるMac体験はそのままに。",
    cta1: "アプリを見る",
    cta2: "バンドルを購入 — $8",
  },
  apps: {
    heading: "アプリ一覧",
    macxplorer: {
      subtitle: "ファイルマネージャー · $5",
      desc: "Mac用にWindowsエクスプローラーを忠実に再現。カット＆移動、AirDrop、SMBネットワークドライブ — 今まで足りなかったすべてが揃っています。",
      features: ["Windowsエクスプローラーレイアウト", "ファイルのカット＆移動", "AirDropサポート", "SMBネットワークサポート", "10言語対応"],
      cta: "MacXplorerを購入 — $5",
    },
    mactrl: {
      subtitle: "キーリマッパー · $5",
      desc: "CommandとControlキーを瞬時に入れ替えて、WindowsのショートカットがMacでも使えます。アプリごとのルール設定で常に正しいショートカットを。",
      features: ["瞬時のキー入れ替え", "アプリ別ホワイトリスト/ブラックリスト", "軽量でネイティブ", "11言語対応"],
      cta: "MaCtrlを購入 — $5",
    },
    macsnap: {
      subtitle: "ウィンドウスナップ · $5",
      desc: "Mac向けにWindowsスタイルのスナップレイアウトを忠実に再現。ウィンドウを半分、3分の1、コーナーに瞬時にスナップ — Windowsと同じ感覚で。",
      features: ["Windowsスナップレイアウトスタイル", "マルチディスプレイ対応", "軽量でネイティブ", "11言語対応"],
      cta: "MacSnapを購入 — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorerを実際に見る",
    macxplorerSubtitle: "購入前に実際のアプリを確認。",
    mactrlHeading: "MaCtrlを実際に見る",
    mactrlSubtitle: "メニューバートグル、ホワイトリスト、ブラックリスト — 1つの軽量アプリで。",
    macsnapHeading: "MacSnapを実際に見る",
    macsnapSubtitle: "Windowsと同じようにウィンドウをスナップ。",
  },
  features: {
    heading: "なぜSprout Studioのアプリを選ぶの？",
    subtitle: "毎日WindowsとMacを行き来する方のために作られています。",
    items: [
      { title: "親しみやすいインターフェース", desc: "macOS上でもすぐに慣れるWindowsエクスプローラースタイルの2ペインレイアウト。" },
      { title: "スマートキーコントロール", desc: "即座にCommandとControlを入れ替え — アプリ別ルールで誤ったショートカットはもうない。" },
      { title: "多言語サポート", desc: "10〜11言語に完全対応し、すべてのユーザーがネイティブな体験を得られます。" },
      { title: "超高速", desc: "ネイティブmacOSフレームワークで構築。即座に起動し、邪魔しません。" },
      { title: "安全でプライベート", desc: "テレメトリーなし、アカウントなし、サブスクリプションなし。データはあなたのデバイスに。" },
      { title: "買い切り", desc: "一度支払えば永久に使用可能。継続課金は一切なし。" },
    ],
  },
  testimonials: {
    heading: "ユーザーの声",
    items: [
      {
        name: "Sarah Chen",
        role: "ソフトウェア開発者",
        avatar: "SC",
        quote: "MacXplorerのおかげでMacが家のように感じられます。カット＆移動だけで何時間も節約 — 最初から搭載されていないのが信じられない。",
      },
      {
        name: "Mike Rodriguez",
        role: "グラフィックデザイナー",
        avatar: "MR",
        quote: "MaCtrlは救世主です。毎日WindowsとMacを使い分けていますが、もう筋肉記憶が両方で機能します。",
      },
      {
        name: "Alex Thompson",
        role: "ビジネスアナリスト",
        avatar: "AT",
        quote: "$8のバンドルは迷う必要なし。両アプリとも洗練されていて軽量、完璧に動作します。Windowsからの移行者に強くおすすめ。",
      },
    ],
  },
  pricing: {
    heading: "シンプルな買い切り料金",
    subtitle: "一度支払うだけ。サブスクなし、隠れた料金なし。",
    plans: {
      macxplorer: {
        description: "Mac向けWindowsエクスプローラースタイルのファイルマネージャー",
        features: ["Windowsエクスプローラーレイアウト", "ファイルのカット＆移動", "SMBネットワークドライブサポート", "10言語対応"],
        cta: "MacXplorerを購入 — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrlセット",
        features: ["MacXplorerのすべての機能", "MaCtrlのすべての機能", "個別購入より20%お得", "買い切り一回払い"],
        badge: "最高のコスパ",
        cta: "バンドルを購入 — $8",
      },
      mactrl: {
        description: "Mac用Command ↔ Controlキー入れ替え",
        features: ["即時キー入れ替えトグル", "アプリ別ホワイトリスト/ブラックリスト", "軽量でネイティブ", "11言語対応"],
        cta: "MaCtrlを購入 — $5",
      },
      macsnap: {
        description: "Mac向けWindowsスタイルのスナップレイアウト",
        features: ["半分・3分の1・コーナーへスナップ", "マルチディスプレイ対応", "11言語対応"],
        cta: "MacSnapを購入 — $5",
      },
    },
  },
  footer: {
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    refund: "返金ポリシー",
  },
  meta: {
    title: "Sprout Studio — Mac必須アプリ | MacXplorer, MaCtrl & MacSnap",
    description: "WindowsからMacに乗り換えた方のためのMac必須アプリ。MacXplorerでWindowsエクスプローラーを、MaCtrlでショートカットを、MacSnapでスナップレイアウトをそのまま — 買い切り。",
  },
};

const zhCN: Translation = {
  nav: {
    tagline: "让Mac像Windows一样顺手。",
    apps: "应用",
    pricing: "价格",
    contact: "联系我们",
  },
  hero: {
    badge: "专为Mac设计",
    h1: ["Windows的便捷。", "macOS的美观。"],
    desc: "将Windows的精华带入macOS — 同时保留您喜爱的Mac体验。",
    cta1: "探索应用",
    cta2: "购买套餐 — $8",
  },
  apps: {
    heading: "我们的应用",
    macxplorer: {
      subtitle: "文件管理器 · $5",
      desc: "为Mac忠实重现Windows资源管理器体验。剪切与移动、AirDrop、SMB网络驱动器 — 一切您所需要的都在这里。",
      features: ["Windows资源管理器布局", "文件剪切与移动", "AirDrop支持", "SMB网络支持", "10种语言"],
      cta: "购买MacXplorer — $5",
    },
    mactrl: {
      subtitle: "按键重映射器 · $5",
      desc: "即时交换Command和Control键，让Windows的肌肉记忆在Mac上同样有效。设置每个应用的规则，在任何应用中使用正确的快捷键。",
      features: ["即时按键交换", "每应用白名单/黑名单", "轻量且原生", "11种语言"],
      cta: "购买MaCtrl — $5",
    },
    macsnap: {
      subtitle: "窗口对齐 · $5",
      desc: "为Mac忠实重现Windows风格的贴靠布局。将窗口即时贴靠到半屏、三分之一或角落 — 和Windows上一模一样。",
      features: ["Windows贴靠布局风格", "多显示器支持", "轻量且原生", "11种语言"],
      cta: "购买MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer实际效果",
    macxplorerSubtitle: "购买前先看真实的应用。",
    mactrlHeading: "MaCtrl实际效果",
    mactrlSubtitle: "菜单栏开关、白名单和黑名单 — 一款轻量应用全搞定。",
    macsnapHeading: "MacSnap实际效果",
    macsnapSubtitle: "像Windows一样对齐窗口。",
  },
  features: {
    heading: "为什么选择Sprout Studio应用？",
    subtitle: "专为每天在Windows和Mac之间切换工作的人打造。",
    items: [
      { title: "熟悉的界面", desc: "Windows资源管理器风格的双窗格布局，在macOS上立刻感到亲切。" },
      { title: "智能按键控制", desc: "随时交换Command和Control — 每应用规则确保快捷键永远正确。" },
      { title: "多语言支持", desc: "完全本地化支持10-11种语言，让每位用户都能获得母语体验。" },
      { title: "极速启动", desc: "使用原生macOS框架构建。即刻启动，不干扰工作。" },
      { title: "安全私密", desc: "无遥测、无账号、无订阅。您的数据仅留在您的设备上。" },
      { title: "一次性购买", desc: "一次付款，永久使用。不再有订阅费用。" },
    ],
  },
  testimonials: {
    heading: "用户怎么说",
    items: [
      {
        name: "Sarah Chen",
        role: "软件开发者",
        avatar: "SC",
        quote: "MacXplorer终于让我在Mac上找到了家的感觉。仅剪切与移动功能就节省了我好几个小时 — 难以相信这不是内置功能。",
      },
      {
        name: "Mike Rodriguez",
        role: "平面设计师",
        avatar: "MR",
        quote: "MaCtrl是救星。我每天在Windows和Mac之间切换，现在我的肌肉记忆在两个系统上都能正常工作了。",
      },
      {
        name: "Alex Thompson",
        role: "业务分析师",
        avatar: "AT",
        quote: "$8的套餐毫不犹豫。两款应用都精致、轻量且运行完美。强烈推荐给从Windows转来的用户。",
      },
    ],
  },
  pricing: {
    heading: "简单的一次性定价",
    subtitle: "一次付款。无订阅，无隐藏费用。",
    plans: {
      macxplorer: {
        description: "适用于Mac的Windows资源管理器风格文件管理器",
        features: ["Windows资源管理器布局", "文件剪切与移动", "SMB网络驱动器支持", "10种语言"],
        cta: "购买MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl套餐",
        features: ["包含MacXplorer所有功能", "包含MaCtrl所有功能", "比单独购买省20%", "一次性付款"],
        badge: "最佳价值",
        cta: "购买套餐 — $8",
      },
      mactrl: {
        description: "Mac的Command ↔ Control键交换",
        features: ["即时按键交换切换", "每应用白名单/黑名单", "轻量且原生", "11种语言"],
        cta: "购买MaCtrl — $5",
      },
      macsnap: {
        description: "适用于Mac的Windows风格贴靠布局",
        features: ["贴靠到半屏/三分之一/角落", "多显示器支持", "11种语言"],
        cta: "购买MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "隐私政策",
    terms: "服务条款",
    refund: "退款政策",
  },
  meta: {
    title: "Sprout Studio — Mac必备软件 | MacXplorer, MaCtrl & MacSnap",
    description: "专为Windows转Mac用户打造的Mac必备软件。MacXplorer将Windows资源管理器带到macOS，MaCtrl让快捷键习惯无缝迁移，MacSnap带来贴靠布局 — 买断制，永久使用。",
  },
};

const ar: Translation = {
  nav: {
    tagline: "اجعل Mac يشعر بـ Windows.",
    apps: "التطبيقات",
    pricing: "الأسعار",
    contact: "تواصل معنا",
  },
  hero: {
    badge: "مصمم لـ Mac",
    h1: ["راحة ويندوز.", "جمال macOS."],
    desc: "تجربة أفضل ما في Windows على macOS — دون التفريط في تجربة Mac التي تحبها.",
    cta1: "استكشف التطبيقات",
    cta2: "احصل على الحزمة — $8",
  },
  apps: {
    heading: "تطبيقاتنا",
    macxplorer: {
      subtitle: "مدير الملفات · $5",
      desc: "تجربة Windows Explorer مُعاد بناؤها بإخلاص لـ Mac. قص ونقل، AirDrop، محركات شبكة SMB — كل ما كنت تفتقده.",
      features: ["تخطيط Windows Explorer", "قص ونقل الملفات", "دعم AirDrop", "دعم شبكة SMB", "10 لغات"],
      cta: "اشترِ MacXplorer — $5",
    },
    mactrl: {
      subtitle: "إعادة تعيين المفاتيح · $5",
      desc: "تبديل مفتاحَي Command وControl فوراً لتعمل ذاكرتك العضلية من Windows على Mac. ضع قواعد لكل تطبيق لضمان الاختصارات الصحيحة دائماً.",
      features: ["تبديل فوري للمفاتيح", "قائمة بيضاء/سوداء لكل تطبيق", "خفيف وأصيل", "11 لغة"],
      cta: "اشترِ MaCtrl — $5",
    },
    macsnap: {
      subtitle: "محاذاة النوافذ · $5",
      desc: "تخطيطات التثبيت بنمط Windows مُعادة البناء لـ Mac. ثبّت النوافذ إلى النصف أو الثلث أو الزوايا فوراً — تماماً كما تفعل على Windows.",
      features: ["نمط تخطيط تثبيت Windows", "دعم متعدد الشاشات", "خفيف وأصيل", "11 لغة"],
      cta: "اشترِ MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer في العمل",
    macxplorerSubtitle: "شاهد التطبيق الحقيقي قبل الشراء.",
    mactrlHeading: "MaCtrl في العمل",
    mactrlSubtitle: "تبديل شريط القائمة، القائمة البيضاء والسوداء — في تطبيق خفيف واحد.",
    macsnapHeading: "MacSnap في العمل",
    macsnapSubtitle: "ثبّت النوافذ تماماً كـ Windows.",
  },
  features: {
    heading: "لماذا تختار تطبيقات Sprout Studio؟",
    subtitle: "مصممة لمن يعمل بين Windows وMac كل يوم.",
    items: [
      { title: "واجهة مألوفة", desc: "تخطيط بجزأين بنمط Windows Explorer يشعرك بالراحة الفورية على macOS." },
      { title: "تحكم ذكي بالمفاتيح", desc: "تبديل Command وControl فوراً — قواعد لكل تطبيق تضمن لا اختصارات خاطئة." },
      { title: "دعم متعدد اللغات", desc: "محلّي بالكامل بـ 10-11 لغة ليحظى كل مستخدم بتجربة أصيلة." },
      { title: "سرعة البرق", desc: "مبني على إطارات عمل macOS الأصيلة. يُطلق فورياً ولا يعيق." },
      { title: "آمن وخاص", desc: "لا إحصاءات، لا حسابات، لا اشتراكات. بياناتك على جهازك فقط." },
      { title: "شراء مرة واحدة", desc: "ادفع مرة واستخدم للأبد. لا رسوم متكررة أبداً." },
    ],
  },
  testimonials: {
    heading: "ماذا يقول المستخدمون",
    items: [
      {
        name: "Sarah Chen",
        role: "مطورة برمجيات",
        avatar: "SC",
        quote: "MacXplorer جعل Mac يبدو وكأنني في المنزل أخيراً. ميزة القص والنقل وحدها وفّرت عليّ ساعات — لا أصدق أنها لم تكن مدمجة.",
      },
      {
        name: "Mike Rodriguez",
        role: "مصمم جرافيك",
        avatar: "MR",
        quote: "MaCtrl منقذ. أتنقل بين Windows وMac يومياً، والآن ذاكرتي العضلية تعمل على كليهما.",
      },
      {
        name: "Alex Thompson",
        role: "محلل أعمال",
        avatar: "AT",
        quote: "الحزمة بـ $8 لا تحتاج تفكيراً. كلا التطبيقين متقنان وخفيفان ويعملان ببساطة. أنصح بهما بشدة لمن قدم من Windows.",
      },
    ],
  },
  pricing: {
    heading: "تسعير بسيط لمرة واحدة",
    subtitle: "ادفع مرة. لا اشتراكات، لا رسوم مخفية.",
    plans: {
      macxplorer: {
        description: "مدير ملفات بنمط Windows Explorer لـ Mac",
        features: ["تخطيط Windows Explorer", "قص ونقل الملفات", "دعم محركات شبكة SMB", "10 لغات"],
        cta: "اشترِ MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl معاً",
        features: ["كل مزايا MacXplorer", "كل مزايا MaCtrl", "وفّر 20% مقارنة بالشراء المنفصل", "دفع مرة واحدة"],
        badge: "أفضل قيمة",
        cta: "اشترِ الحزمة — $8",
      },
      mactrl: {
        description: "تبديل Command ↔ Control لـ Mac",
        features: ["تبديل فوري بزر", "قائمة بيضاء/سوداء لكل تطبيق", "خفيف وأصيل", "11 لغة"],
        cta: "اشترِ MaCtrl — $5",
      },
      macsnap: {
        description: "تخطيطات تثبيت بنمط Windows لـ Mac",
        features: ["تثبيت إلى النصف/الثلث/الزوايا", "دعم متعدد الشاشات", "11 لغة"],
        cta: "اشترِ MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    refund: "سياسة الاسترداد",
  },
  meta: {
    title: "Sprout Studio — أفضل تطبيقات Mac | MacXplorer, MaCtrl & MacSnap",
    description: "تطبيقات Mac الأساسية للمنتقلين من Windows. MacXplorer يجلب مستكشف Windows، MaCtrl يعيد تعيين اختصاراتك، MacSnap يضيف تخطيطات التثبيت — دفعة واحدة للأبد.",
  },
};

const ru: Translation = {
  nav: {
    tagline: "Сделайте Mac удобным, как Windows.",
    apps: "Приложения",
    pricing: "Цены",
    contact: "Контакты",
  },
  hero: {
    badge: "Создано для Mac",
    h1: ["Удобство Windows.", "Красота macOS."],
    desc: "Лучшее из Windows на macOS — не жертвуя любимым Mac-опытом.",
    cta1: "Смотреть приложения",
    cta2: "Купить набор — $8",
  },
  apps: {
    heading: "Наши приложения",
    macxplorer: {
      subtitle: "Файловый менеджер · $5",
      desc: "Опыт Windows Explorer, воссозданный для Mac. Вырезать и переместить, AirDrop, SMB-сетевые диски — всё, чего вам не хватало.",
      features: ["Интерфейс Windows Explorer", "Вырезать и переместить", "Поддержка AirDrop", "Поддержка SMB-сетей", "10 языков"],
      cta: "Купить MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Ремаппер клавиш · $5",
      desc: "Мгновенная замена Command и Control, чтобы мышечная память Windows работала на Mac. Настройте правила для каждого приложения.",
      features: ["Мгновенная замена клавиш", "Белый/чёрный список для приложений", "Лёгкое и нативное", "11 языков"],
      cta: "Купить MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Привязка окон · $5",
      desc: "Snap-раскладки в стиле Windows, воссозданные для Mac. Мгновенно прикрепляйте окна к половине, трети или углу — точно как в Windows.",
      features: ["Стиль Snap-раскладок Windows", "Поддержка нескольких мониторов", "Лёгкое и нативное", "11 языков"],
      cta: "Купить MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer в действии",
    macxplorerSubtitle: "Посмотрите реальное приложение перед покупкой.",
    mactrlHeading: "MaCtrl в действии",
    mactrlSubtitle: "Переключатель в строке меню, белый и чёрный список — всё в одном лёгком приложении.",
    macsnapHeading: "MacSnap в действии",
    macsnapSubtitle: "Прикрепляйте окна как в Windows.",
  },
  features: {
    heading: "Почему Sprout Studio?",
    subtitle: "Создано для тех, кто каждый день работает и на Windows, и на Mac.",
    items: [
      { title: "Знакомый интерфейс", desc: "Двухпанельный интерфейс в стиле Windows Explorer, который сразу ощущается как дома на macOS." },
      { title: "Умное управление клавишами", desc: "Мгновенная замена Command и Control — правила для каждого приложения означают правильные сочетания клавиш." },
      { title: "Многоязычная поддержка", desc: "Полная локализация на 10-11 языков для нативного опыта каждого пользователя." },
      { title: "Молниеносная скорость", desc: "Создано на нативных фреймворках macOS. Запускается мгновенно." },
      { title: "Безопасность и приватность", desc: "Никакой телеметрии, аккаунтов и подписок. Ваши данные — на вашем устройстве." },
      { title: "Разовая покупка", desc: "Платите один раз и используйте вечно. Никаких регулярных платежей." },
    ],
  },
  testimonials: {
    heading: "Что говорят пользователи",
    items: [
      {
        name: "Sarah Chen",
        role: "Разработчик ПО",
        avatar: "SC",
        quote: "MacXplorer наконец сделал Mac родным. Только функция «вырезать и переместить» сэкономила мне часы — не верится, что её не было изначально.",
      },
      {
        name: "Mike Rodriguez",
        role: "Графический дизайнер",
        avatar: "MR",
        quote: "MaCtrl — спасение. Каждый день переключаюсь между Windows и Mac, и теперь мышечная память работает на обоих.",
      },
      {
        name: "Alex Thompson",
        role: "Бизнес-аналитик",
        avatar: "AT",
        quote: "Набор за $8 — очевидный выбор. Оба приложения отточены, лёгкие и просто работают. Рекомендую всем, кто пришёл с Windows.",
      },
    ],
  },
  pricing: {
    heading: "Простая разовая цена",
    subtitle: "Платите один раз. Без подписок и скрытых платежей.",
    plans: {
      macxplorer: {
        description: "Файловый менеджер в стиле Windows Explorer для Mac",
        features: ["Интерфейс Windows Explorer", "Вырезать и переместить", "Поддержка SMB-сетевых дисков", "10 языков"],
        cta: "Купить MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl вместе",
        features: ["Всё из MacXplorer", "Всё из MaCtrl", "Экономия 20% vs. раздельной покупки", "Разовый платёж"],
        badge: "Лучшая ценность",
        cta: "Купить набор — $8",
      },
      mactrl: {
        description: "Замена Command ↔ Control для Mac",
        features: ["Мгновенный переключатель клавиш", "Белый/чёрный список для приложений", "Лёгкое и нативное", "11 языков"],
        cta: "Купить MaCtrl — $5",
      },
      macsnap: {
        description: "Snap-раскладки в стиле Windows для Mac",
        features: ["Привязка к половине/трети/углу", "Поддержка нескольких мониторов", "11 языков"],
        cta: "Купить MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Политика конфиденциальности",
    terms: "Условия использования",
    refund: "Политика возврата",
  },
  meta: {
    title: "Sprout Studio — Лучшие приложения для Mac | MacXplorer, MaCtrl & MacSnap",
    description: "Необходимые приложения для Mac при переходе с Windows. MacXplorer — проводник Windows для macOS, MaCtrl — переназначение клавиш, MacSnap — Snap-раскладки. Одноразовая покупка.",
  },
};

const it: Translation = {
  nav: {
    tagline: "Il Mac che sembra Windows.",
    apps: "App",
    pricing: "Prezzi",
    contact: "Contatti",
  },
  hero: {
    badge: "Per Mac",
    h1: ["Il comfort di Windows.", "La bellezza di macOS."],
    desc: "Il meglio di Windows su macOS — senza rinunciare all'esperienza Mac che ami.",
    cta1: "Esplora le app",
    cta2: "Acquista il bundle — $8",
  },
  apps: {
    heading: "Le nostre app",
    macxplorer: {
      subtitle: "Gestore file · $5",
      desc: "L'esperienza di Windows Explorer, ricostruita per Mac. Taglia e sposta, AirDrop, unità di rete SMB — tutto quello che ti mancava.",
      features: ["Layout Windows Explorer", "Taglia e sposta i file", "Supporto AirDrop", "Supporto rete SMB", "10 lingue"],
      cta: "Acquista MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Rimappatore tasti · $5",
      desc: "Scambia istantaneamente Command e Control per usare la memoria muscolare di Windows sul Mac. Regole per app per i tasti giusti ovunque.",
      features: ["Scambio tasti istantaneo", "Lista bianca/nera per app", "Leggero e nativo", "11 lingue"],
      cta: "Acquista MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Snap finestre · $5",
      desc: "Layout Snap in stile Windows, fedelmente ricreati per Mac. Aggancia le finestre a metà, un terzo o agli angoli istantaneamente — proprio come su Windows.",
      features: ["Stile Snap Layout Windows", "Supporto multi-display", "Leggero e nativo", "11 lingue"],
      cta: "Acquista MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer in azione",
    macxplorerSubtitle: "Guarda l'app vera prima di acquistare.",
    mactrlHeading: "MaCtrl in azione",
    mactrlSubtitle: "Toggle nella barra menu, lista bianca e nera — tutto in un'app leggera.",
    macsnapHeading: "MacSnap in azione",
    macsnapSubtitle: "Aggancia le finestre proprio come su Windows.",
  },
  features: {
    heading: "Perché scegliere le app Sprout Studio?",
    subtitle: "Costruite per chi lavora ogni giorno tra Windows e Mac.",
    items: [
      { title: "Interfaccia familiare", desc: "Layout a due pannelli in stile Windows Explorer che su macOS sembra subito casa." },
      { title: "Controllo tasti intelligente", desc: "Scambia Command e Control al volo — regole per app, nessun tasto sbagliato." },
      { title: "Supporto multilingua", desc: "Completamente localizzato in 10-11 lingue per un'esperienza nativa per tutti." },
      { title: "Velocità fulminea", desc: "Creato con framework nativi macOS. Si avvia istantaneamente." },
      { title: "Sicuro e privato", desc: "Nessuna telemetria, nessun account, nessun abbonamento. I tuoi dati restano sul tuo dispositivo." },
      { title: "Acquisto unico", desc: "Paghi una volta e usi per sempre. Nessun costo ricorrente." },
    ],
  },
  testimonials: {
    heading: "Cosa dicono gli utenti",
    items: [
      {
        name: "Sarah Chen",
        role: "Sviluppatrice software",
        avatar: "SC",
        quote: "MacXplorer mi fa finalmente sentire a casa sul Mac. Solo il Taglia e Sposta mi ha risparmiato ore — non riesco a credere che non fosse integrato.",
      },
      {
        name: "Mike Rodriguez",
        role: "Designer grafico",
        avatar: "MR",
        quote: "MaCtrl è un salvavita. Passo da Windows a Mac ogni giorno, e ora la mia memoria muscolare funziona su entrambi.",
      },
      {
        name: "Alex Thompson",
        role: "Analista aziendale",
        avatar: "AT",
        quote: "Il bundle a $8 è un'ovvietà. Entrambe le app sono rifinite, leggere e funzionano perfettamente. Consigliatissimo per chi viene da Windows.",
      },
    ],
  },
  pricing: {
    heading: "Prezzo semplice, una tantum",
    subtitle: "Paghi una volta. Nessun abbonamento, nessun costo nascosto.",
    plans: {
      macxplorer: {
        description: "Gestore file in stile Windows Explorer per Mac",
        features: ["Layout Windows Explorer", "Taglia e sposta i file", "Supporto unità di rete SMB", "10 lingue"],
        cta: "Acquista MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl insieme",
        features: ["Tutto di MacXplorer", "Tutto di MaCtrl", "Risparmia il 20% rispetto all'acquisto separato", "Pagamento unico"],
        badge: "Miglior valore",
        cta: "Acquista il bundle — $8",
      },
      mactrl: {
        description: "Scambio Command ↔ Control per Mac",
        features: ["Toggle scambio tasti istantaneo", "Lista bianca/nera per app", "Leggero e nativo", "11 lingue"],
        cta: "Acquista MaCtrl — $5",
      },
      macsnap: {
        description: "Snap Layout in stile Windows per Mac",
        features: ["Snap a metà, terzi e angoli", "Supporto multi-display", "11 lingue"],
        cta: "Acquista MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
    refund: "Politica di rimborso",
  },
  meta: {
    title: "Sprout Studio — App essenziali per Mac | MacXplorer, MaCtrl & MacSnap",
    description: "Le app indispensabili per chi passa da Windows a Mac. MacXplorer porta Esplora risorse su macOS, MaCtrl rimappa i tasti, MacSnap aggiunge gli Snap Layout — acquisto una tantum.",
  },
};

const de: Translation = {
  nav: {
    tagline: "Mac, der sich wie Windows anfühlt.",
    apps: "Apps",
    pricing: "Preise",
    contact: "Kontakt",
  },
  hero: {
    badge: "Für Mac",
    h1: ["Der Komfort von Windows.", "Die Schönheit von macOS."],
    desc: "Das Beste aus Windows auf macOS — ohne auf das Mac-Erlebnis zu verzichten, das du liebst.",
    cta1: "Apps erkunden",
    cta2: "Bundle kaufen — $8",
  },
  apps: {
    heading: "Unsere Apps",
    macxplorer: {
      subtitle: "Dateimanager · $5",
      desc: "Das Windows Explorer-Erlebnis, für Mac neu gebaut. Ausschneiden & Verschieben, AirDrop, SMB-Netzlaufwerke — alles, was dir gefehlt hat.",
      features: ["Windows Explorer-Layout", "Dateien ausschneiden & verschieben", "AirDrop-Support", "SMB-Netzwerk-Support", "10 Sprachen"],
      cta: "MacXplorer kaufen — $5",
    },
    mactrl: {
      subtitle: "Tastenbelegung · $5",
      desc: "Tausche Command und Control sofort, damit dein Windows-Muskelgedächtnis auf dem Mac funktioniert. App-spezifische Regeln für die richtigen Shortcuts überall.",
      features: ["Sofortiger Tastentausch", "Weiß-/Schwarzliste pro App", "Leichtgewichtig & nativ", "11 Sprachen"],
      cta: "MaCtrl kaufen — $5",
    },
    macsnap: {
      subtitle: "Fenster-Snap · $5",
      desc: "Snap-Layouts im Windows-Stil, für Mac treu nachgebaut. Fenster sofort an Hälften, Drittel oder Ecken andocken — genau wie auf Windows.",
      features: ["Windows Snap-Layout-Stil", "Multi-Monitor-Unterstützung", "Leichtgewichtig & nativ", "11 Sprachen"],
      cta: "MacSnap kaufen — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer in Aktion",
    macxplorerSubtitle: "Sieh die echte App vor dem Kauf.",
    mactrlHeading: "MaCtrl in Aktion",
    mactrlSubtitle: "Menüleisten-Toggle, Weiß- und Schwarzliste — alles in einer leichten App.",
    macsnapHeading: "MacSnap in Aktion",
    macsnapSubtitle: "Fenster genau wie unter Windows andocken.",
  },
  features: {
    heading: "Warum Sprout Studio Apps?",
    subtitle: "Gebaut für Menschen, die täglich zwischen Windows und Mac wechseln.",
    items: [
      { title: "Vertraute Oberfläche", desc: "Zweifenstriges Windows Explorer-Layout, das auf macOS sofort vertraut wirkt." },
      { title: "Intelligente Tastenkontrolle", desc: "Command und Control im Handumdrehen tauschen — App-Regeln sorgen für richtige Shortcuts." },
      { title: "Mehrsprachige Unterstützung", desc: "Vollständig in 10-11 Sprachen lokalisiert für ein natives Erlebnis für jeden." },
      { title: "Blitzschnell", desc: "Mit nativen macOS-Frameworks gebaut. Startet sofort, bleibt im Hintergrund." },
      { title: "Sicher & privat", desc: "Kein Telemetrie, keine Konten, keine Abonnements. Deine Daten bleiben auf deinem Gerät." },
      { title: "Einmalkauf", desc: "Einmal zahlen und für immer nutzen. Keine laufenden Kosten." },
    ],
  },
  testimonials: {
    heading: "Was Nutzer sagen",
    items: [
      {
        name: "Sarah Chen",
        role: "Software-Entwicklerin",
        avatar: "SC",
        quote: "MacXplorer lässt mich endlich auf dem Mac heimisch fühlen. Nur Ausschneiden & Verschieben hat mir schon Stunden gespart — unglaublich, dass es nicht eingebaut war.",
      },
      {
        name: "Mike Rodriguez",
        role: "Grafikdesigner",
        avatar: "MR",
        quote: "MaCtrl ist ein Lebensretter. Ich wechsle täglich zwischen Windows und Mac, und jetzt funktioniert mein Muskelgedächtnis auf beiden.",
      },
      {
        name: "Alex Thompson",
        role: "Business-Analyst",
        avatar: "AT",
        quote: "Das Bundle für $8 ist eine klare Sache. Beide Apps sind durchdacht, leicht und funktionieren einfach. Sehr empfohlen für alle, die von Windows kommen.",
      },
    ],
  },
  pricing: {
    heading: "Einfache Einmalpreise",
    subtitle: "Einmal zahlen. Keine Abos, keine versteckten Gebühren.",
    plans: {
      macxplorer: {
        description: "Windows Explorer-Dateimanager für Mac",
        features: ["Windows Explorer-Layout", "Dateien ausschneiden & verschieben", "SMB-Netzlaufwerk-Support", "10 Sprachen"],
        cta: "MacXplorer kaufen — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl zusammen",
        features: ["Alles aus MacXplorer", "Alles aus MaCtrl", "20% sparen vs. Einzelkauf", "Einmalzahlung"],
        badge: "Bestes Preis-Leistungs-Verhältnis",
        cta: "Bundle kaufen — $8",
      },
      mactrl: {
        description: "Command ↔ Control-Tausch für Mac",
        features: ["Sofortiger Tastentausch", "Weiß-/Schwarzliste pro App", "Leichtgewichtig & nativ", "11 Sprachen"],
        cta: "MaCtrl kaufen — $5",
      },
      macsnap: {
        description: "Snap-Layouts im Windows-Stil für Mac",
        features: ["Andocken an Hälften/Drittel/Ecken", "Multi-Monitor-Unterstützung", "11 Sprachen"],
        cta: "MacSnap kaufen — $5",
      },
    },
  },
  footer: {
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    refund: "Rückgaberichtlinie",
  },
  meta: {
    title: "Sprout Studio — Unverzichtbare Mac-Apps | MacXplorer, MaCtrl & MacSnap",
    description: "Die besten Mac-Apps für den Wechsel von Windows zu Mac. MacXplorer bringt den Windows Explorer auf macOS, MaCtrl belegt Tasten neu, MacSnap fügt Snap-Layouts hinzu — einmalige Zahlung.",
  },
};

const fr: Translation = {
  nav: {
    tagline: "Un Mac avec la familiarité de Windows.",
    apps: "Applications",
    pricing: "Tarifs",
    contact: "Contact",
  },
  hero: {
    badge: "Pour Mac",
    h1: ["Le confort de Windows.", "La beauté de macOS."],
    desc: "Le meilleur de Windows sur macOS — sans sacrifier l'expérience Mac que vous aimez.",
    cta1: "Explorer les apps",
    cta2: "Acheter le bundle — $8",
  },
  apps: {
    heading: "Nos applications",
    macxplorer: {
      subtitle: "Gestionnaire de fichiers · $5",
      desc: "L'expérience Windows Explorer, fidèlement recréée pour Mac. Couper-déplacer, AirDrop, lecteurs réseau SMB — tout ce qui vous manquait.",
      features: ["Interface Windows Explorer", "Couper et déplacer les fichiers", "Support AirDrop", "Support réseau SMB", "10 langues"],
      cta: "Acheter MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Remappeur de touches · $5",
      desc: "Échangez instantanément Command et Control pour que la mémoire musculaire Windows fonctionne sur Mac. Règles par application pour les bons raccourcis partout.",
      features: ["Échange de touches instantané", "Liste blanche/noire par app", "Léger et natif", "11 langues"],
      cta: "Acheter MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Snap de fenêtres · $5",
      desc: "Les Snap Layouts de Windows, fidèlement recréés pour Mac. Ancrez les fenêtres en moitiés, tiers ou coins instantanément — exactement comme sur Windows.",
      features: ["Style Snap Layouts Windows", "Support multi-écrans", "Léger et natif", "11 langues"],
      cta: "Acheter MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer en action",
    macxplorerSubtitle: "Découvrez la vraie application avant d'acheter.",
    mactrlHeading: "MaCtrl en action",
    mactrlSubtitle: "Bascule dans la barre de menu, liste blanche et noire — dans une application légère.",
    macsnapHeading: "MacSnap en action",
    macsnapSubtitle: "Ancrez les fenêtres comme sur Windows.",
  },
  features: {
    heading: "Pourquoi choisir les apps Sprout Studio ?",
    subtitle: "Conçu pour ceux qui travaillent chaque jour entre Windows et Mac.",
    items: [
      { title: "Interface familière", desc: "Disposition à deux volets en style Windows Explorer qui se sent aussitôt chez soi sur macOS." },
      { title: "Contrôle intelligent des touches", desc: "Échangez Command et Control à la volée — les règles par app garantissent les bons raccourcis." },
      { title: "Support multilingue", desc: "Entièrement localisé en 10-11 langues pour une expérience native pour tous." },
      { title: "Ultra-rapide", desc: "Construit avec les frameworks natifs macOS. Lance instantanément, reste discret." },
      { title: "Sûr et privé", desc: "Aucune télémétrie, aucun compte, aucun abonnement. Vos données restent sur votre appareil." },
      { title: "Achat unique", desc: "Payez une fois, utilisez pour toujours. Aucuns frais récurrents." },
    ],
  },
  testimonials: {
    heading: "Ce que disent les utilisateurs",
    items: [
      {
        name: "Sarah Chen",
        role: "Développeuse logiciel",
        avatar: "SC",
        quote: "MacXplorer me fait enfin me sentir chez moi sur Mac. La seule fonction Couper & Déplacer m'a économisé des heures — je n'arrive pas à croire que ce n'était pas intégré.",
      },
      {
        name: "Mike Rodriguez",
        role: "Designer graphique",
        avatar: "MR",
        quote: "MaCtrl est une bouée de sauvetage. Je passe entre Windows et Mac chaque jour, et maintenant ma mémoire musculaire fonctionne sur les deux.",
      },
      {
        name: "Alex Thompson",
        role: "Analyste commercial",
        avatar: "AT",
        quote: "Le bundle à $8, c'est une évidence. Les deux apps sont soignées, légères et fonctionnent parfaitement. Fortement recommandé pour ceux qui viennent de Windows.",
      },
    ],
  },
  pricing: {
    heading: "Tarification simple, en une fois",
    subtitle: "Payez une fois. Pas d'abonnements, pas de frais cachés.",
    plans: {
      macxplorer: {
        description: "Gestionnaire de fichiers style Windows Explorer pour Mac",
        features: ["Interface Windows Explorer", "Couper et déplacer les fichiers", "Support lecteurs réseau SMB", "10 langues"],
        cta: "Acheter MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl ensemble",
        features: ["Tout MacXplorer", "Tout MaCtrl", "20% d'économie vs. achat séparé", "Paiement unique"],
        badge: "Meilleur rapport qualité-prix",
        cta: "Acheter le bundle — $8",
      },
      mactrl: {
        description: "Échange Command ↔ Control pour Mac",
        features: ["Bascule d'échange de touches instantanée", "Liste blanche/noire par app", "Léger et natif", "11 langues"],
        cta: "Acheter MaCtrl — $5",
      },
      macsnap: {
        description: "Snap Layouts style Windows pour Mac",
        features: ["Ancrer en moitiés, tiers et coins", "Support multi-écrans", "11 langues"],
        cta: "Acheter MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    refund: "Politique de remboursement",
  },
  meta: {
    title: "Sprout Studio — Apps Mac essentielles | MacXplorer, MaCtrl & MacSnap",
    description: "Les meilleures apps pour passer de Windows à Mac. MacXplorer apporte l'Explorateur Windows sur macOS, MaCtrl remappes vos touches, MacSnap ajoute les Snap Layouts — achat unique.",
  },
};

const ptBR: Translation = {
  nav: {
    tagline: "Mac com a familiaridade do Windows.",
    apps: "Apps",
    pricing: "Preços",
    contact: "Contato",
  },
  hero: {
    badge: "Para Mac",
    h1: ["O conforto do Windows.", "A beleza do macOS."],
    desc: "O melhor do Windows no macOS — sem abrir mão da experiência Mac que você ama.",
    cta1: "Explorar apps",
    cta2: "Comprar o bundle — $8",
  },
  apps: {
    heading: "Nossos apps",
    macxplorer: {
      subtitle: "Gerenciador de arquivos · $5",
      desc: "A experiência do Windows Explorer, fielmente recriada para o Mac. Recortar e mover, AirDrop, drives de rede SMB — tudo que você estava perdendo.",
      features: ["Layout do Windows Explorer", "Recortar e mover arquivos", "Suporte a AirDrop", "Suporte a rede SMB", "10 idiomas"],
      cta: "Comprar MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Remapeador de teclas · $5",
      desc: "Troque Command e Control instantaneamente para que a memória muscular do Windows funcione no Mac. Regras por app para os atalhos certos em todo lugar.",
      features: ["Troca de teclas instantânea", "Lista branca/preta por app", "Leve e nativo", "11 idiomas"],
      cta: "Comprar MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Snap de janelas · $5",
      desc: "Snap Layouts no estilo Windows, fielmente recriados para Mac. Encaixe janelas em metades, terços ou cantos instantaneamente — exatamente como no Windows.",
      features: ["Estilo Snap Layouts Windows", "Suporte multi-monitor", "Leve e nativo", "11 idiomas"],
      cta: "Comprar MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer em ação",
    macxplorerSubtitle: "Veja o app real antes de comprar.",
    mactrlHeading: "MaCtrl em ação",
    mactrlSubtitle: "Toggle na barra de menu, lista branca e preta — tudo em um app leve.",
    macsnapHeading: "MacSnap em ação",
    macsnapSubtitle: "Encaixe janelas exatamente como no Windows.",
  },
  features: {
    heading: "Por que escolher os apps Sprout Studio?",
    subtitle: "Criado para quem trabalha entre Windows e Mac todos os dias.",
    items: [
      { title: "Interface familiar", desc: "Layout de dois painéis no estilo Windows Explorer que parece imediatamente natural no macOS." },
      { title: "Controle inteligente de teclas", desc: "Troque Command e Control na hora — regras por app garantem os atalhos certos." },
      { title: "Suporte multilíngue", desc: "Totalmente localizado em 10-11 idiomas para uma experiência nativa para todos." },
      { title: "Ultrarrápido", desc: "Criado com frameworks nativos do macOS. Abre instantaneamente." },
      { title: "Seguro e privado", desc: "Sem telemetria, sem contas, sem assinaturas. Seus dados ficam no seu dispositivo." },
      { title: "Compra única", desc: "Pague uma vez e use para sempre. Sem taxas recorrentes." },
    ],
  },
  testimonials: {
    heading: "O que os usuários estão dizendo",
    items: [
      {
        name: "Sarah Chen",
        role: "Desenvolvedora de software",
        avatar: "SC",
        quote: "O MacXplorer finalmente me faz sentir em casa no Mac. Só o Recortar e Mover já me economizou horas — mal consigo acreditar que não estava incluído.",
      },
      {
        name: "Mike Rodriguez",
        role: "Designer gráfico",
        avatar: "MR",
        quote: "MaCtrl é um salva-vidas. Alterno entre Windows e Mac todo dia, e agora minha memória muscular funciona nos dois.",
      },
      {
        name: "Alex Thompson",
        role: "Analista de negócios",
        avatar: "AT",
        quote: "O bundle por $8 é óbvio. Os dois apps são polidos, leves e simplesmente funcionam. Altamente recomendado para quem vem do Windows.",
      },
    ],
  },
  pricing: {
    heading: "Preço simples, pague uma vez",
    subtitle: "Pague uma vez. Sem assinaturas, sem taxas ocultas.",
    plans: {
      macxplorer: {
        description: "Gerenciador de arquivos estilo Windows Explorer para Mac",
        features: ["Layout do Windows Explorer", "Recortar e mover arquivos", "Suporte a drives de rede SMB", "10 idiomas"],
        cta: "Comprar MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl juntos",
        features: ["Tudo do MacXplorer", "Tudo do MaCtrl", "Economize 20% vs. compra separada", "Pagamento único"],
        badge: "Melhor custo-benefício",
        cta: "Comprar o bundle — $8",
      },
      mactrl: {
        description: "Troca de Command ↔ Control para Mac",
        features: ["Toggle de troca de teclas instantânea", "Lista branca/preta por app", "Leve e nativo", "11 idiomas"],
        cta: "Comprar MaCtrl — $5",
      },
      macsnap: {
        description: "Snap Layouts estilo Windows para Mac",
        features: ["Encaixar em metades/terços/cantos", "Suporte multi-monitor", "11 idiomas"],
        cta: "Comprar MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Política de privacidade",
    terms: "Termos de serviço",
    refund: "Política de reembolso",
  },
  meta: {
    title: "Sprout Studio — Apps essenciais para Mac | MacXplorer, MaCtrl & MacSnap",
    description: "Os melhores apps para quem migra do Windows para Mac. MacXplorer traz o Explorador de Arquivos para macOS, MaCtrl remapeia suas teclas, MacSnap adiciona Snap Layouts — pagamento único.",
  },
};

const es: Translation = {
  nav: {
    tagline: "Mac con la comodidad de Windows.",
    apps: "Apps",
    pricing: "Precios",
    contact: "Contacto",
  },
  hero: {
    badge: "Para Mac",
    h1: ["La comodidad de Windows.", "La belleza de macOS."],
    desc: "Lo mejor de Windows en macOS — sin sacrificar la experiencia Mac que amas.",
    cta1: "Explorar apps",
    cta2: "Comprar el bundle — $8",
  },
  apps: {
    heading: "Nuestras apps",
    macxplorer: {
      subtitle: "Gestor de archivos · $5",
      desc: "La experiencia de Windows Explorer, fielmente recreada para Mac. Cortar y mover, AirDrop, unidades de red SMB — todo lo que te faltaba.",
      features: ["Diseño Windows Explorer", "Cortar y mover archivos", "Soporte AirDrop", "Soporte red SMB", "10 idiomas"],
      cta: "Comprar MacXplorer — $5",
    },
    mactrl: {
      subtitle: "Reasignador de teclas · $5",
      desc: "Intercambia Command y Control al instante para que la memoria muscular de Windows funcione en Mac. Reglas por app para los atajos correctos en todas partes.",
      features: ["Intercambio de teclas al instante", "Lista blanca/negra por app", "Ligero y nativo", "11 idiomas"],
      cta: "Comprar MaCtrl — $5",
    },
    macsnap: {
      subtitle: "Snap de ventanas · $5",
      desc: "Snap Layouts al estilo Windows, fielmente recreados para Mac. Fija ventanas a mitades, tercios o esquinas al instante — exactamente como en Windows.",
      features: ["Estilo Snap Layouts Windows", "Soporte multi-pantalla", "Ligero y nativo", "11 idiomas"],
      cta: "Comprar MacSnap — $5",
    },
  },
  screenshots: {
    macxplorerHeading: "MacXplorer en acción",
    macxplorerSubtitle: "Ve la app real antes de comprar.",
    mactrlHeading: "MaCtrl en acción",
    mactrlSubtitle: "Toggle en la barra de menú, lista blanca y negra — todo en una app ligera.",
    macsnapHeading: "MacSnap en acción",
    macsnapSubtitle: "Fija ventanas igual que en Windows.",
  },
  features: {
    heading: "¿Por qué elegir las apps de Sprout Studio?",
    subtitle: "Hecho para personas que trabajan entre Windows y Mac todos los días.",
    items: [
      { title: "Interfaz familiar", desc: "Diseño de dos paneles estilo Windows Explorer que en macOS se siente inmediatamente como en casa." },
      { title: "Control inteligente de teclas", desc: "Intercambia Command y Control al vuelo — reglas por app para atajos siempre correctos." },
      { title: "Soporte multilingüe", desc: "Completamente localizado en 10-11 idiomas para una experiencia nativa para todos." },
      { title: "Ultra rápido", desc: "Construido con frameworks nativos de macOS. Se inicia instantáneamente." },
      { title: "Seguro y privado", desc: "Sin telemetría, sin cuentas, sin suscripciones. Tus datos permanecen en tu dispositivo." },
      { title: "Compra única", desc: "Paga una vez y usa para siempre. Sin costos recurrentes." },
    ],
  },
  testimonials: {
    heading: "Qué dicen los usuarios",
    items: [
      {
        name: "Sarah Chen",
        role: "Desarrolladora de software",
        avatar: "SC",
        quote: "MacXplorer por fin me hace sentir en casa en el Mac. Solo Cortar y Mover me ahorró horas — no puedo creer que no estuviera incluido.",
      },
      {
        name: "Mike Rodriguez",
        role: "Diseñador gráfico",
        avatar: "MR",
        quote: "MaCtrl es un salvavidas. Cambio entre Windows y Mac cada día, y ahora mi memoria muscular funciona en ambos.",
      },
      {
        name: "Alex Thompson",
        role: "Analista de negocios",
        avatar: "AT",
        quote: "El bundle por $8 es obvio. Ambas apps son pulidas, ligeras y simplemente funcionan. Muy recomendado para quienes vienen de Windows.",
      },
    ],
  },
  pricing: {
    heading: "Precios simples, pago único",
    subtitle: "Paga una vez. Sin suscripciones, sin cargos ocultos.",
    plans: {
      macxplorer: {
        description: "Gestor de archivos estilo Windows Explorer para Mac",
        features: ["Diseño Windows Explorer", "Cortar y mover archivos", "Soporte unidades de red SMB", "10 idiomas"],
        cta: "Comprar MacXplorer — $5",
      },
      bundle: {
        description: "MacXplorer + MaCtrl juntos",
        features: ["Todo de MacXplorer", "Todo de MaCtrl", "Ahorra 20% vs. compra por separado", "Pago único"],
        badge: "Mejor valor",
        cta: "Comprar el bundle — $8",
      },
      mactrl: {
        description: "Intercambio Command ↔ Control para Mac",
        features: ["Toggle de intercambio de teclas instantáneo", "Lista blanca/negra por app", "Ligero y nativo", "11 idiomas"],
        cta: "Comprar MaCtrl — $5",
      },
      macsnap: {
        description: "Snap Layouts estilo Windows para Mac",
        features: ["Fijar en mitades, tercios y esquinas", "Soporte multi-pantalla", "11 idiomas"],
        cta: "Comprar MacSnap — $5",
      },
    },
  },
  footer: {
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    refund: "Política de reembolso",
  },
  meta: {
    title: "Sprout Studio — Apps esenciales para Mac | MacXplorer, MaCtrl & MacSnap",
    description: "Las mejores apps para quienes cambian de Windows a Mac. MacXplorer lleva el Explorador de Windows a macOS, MaCtrl reasigna tus teclas, MacSnap añade Snap Layouts — pago único.",
  },
};

const translations: Record<Lang, Translation> = {
  en,
  ko,
  ja,
  "zh-CN": zhCN,
  ar,
  ru,
  it,
  de,
  fr,
  "pt-BR": ptBR,
  es,
};

export function getTranslation(lang: string): Translation {
  return translations[lang as Lang] ?? en;
}
