import { Question } from './types';

export const questions: Question[] = [
  // --- 第一部分：帳戶架構與設定 ---
  {
    id: "Q01",
    category: "第一部分：帳戶架構與設定",
    question: "你經營的小公司有一個網站，以及兩個分別適用於 iOS 和 Android 裝置的應用程式。如果你的目標是跨這三者分析事件和使用者，該如何設定帳戶？",
    options: [
      "一項資源加上一個用於網站的網站資料串流，另一項資源加上一個用於應用程式的應用程式資料串流",
      "一項資源再加上兩個資料串流，一個用於網站，另一個用於應用程式",
      "一項資源加上一個用於網站的網站資料串流，另一項資源加上兩個應用程式資料串流，其中一個用於 iOS，一個則用於 Android",
      "一項資源再加上三個資料串流，一個用於網站，兩個分別用於 iOS 和 Android 應用程式"
    ],
    correctAnswer: "一項資源再加上三個資料串流，一個用於網站，兩個分別用於 iOS 和 Android 應用程式",
    explanation: "GA4 允許將網站、iOS 和 Android 應用程式的資料串流整合到同一個資源中，以實現跨平台分析。"
  },
  {
    id: "Q02",
    category: "第一部分：帳戶架構與設定",
    question: "貴商家有網站和應用程式，你想要分析這兩種平台的使用者歷程，並瞭解新使用者如何進入網站和應用程式。該使用以下何者來獲得這類洞察資料？",
    options: [
      "Google Analytics 4 資源",
      "使用 Google Marketing Platform。",
      "Google Analytics Admin API",
      "Firebase"
    ],
    correctAnswer: "Google Analytics 4 資源",
    explanation: "Google Analytics 4 資源專為跨平台（網站 + App）的使用者歷程分析而設計。"
  },
  {
    id: "Q03",
    category: "第一部分：帳戶架構與設定",
    question: "你正在設定 Google Analytics，過程中必須設定資料串流。以下何者符合對資料串流的描述？",
    options: [
      "資料串流會在資源內運作，負責提供來自應用程式和網站的資料",
      "資料串流會在「報表」內運作，可讓你區隔和比較資料",
      "資料串流會在帳戶內運作，做為容器來儲存你從應用程式和網站收集到的資料",
      "資料串流會在「探索」內運作，定義完成後可加進任何探索"
    ],
    correctAnswer: "資料串流會在資源內運作，負責提供來自應用程式和網站的資料",
    explanation: "資料串流是資源的一部分，負責接收來自網站或應用程式的資料來源。"
  },
  {
    id: "Q04",
    category: "第一部分：帳戶架構與設定",
    question: "你有一個網站，且想要開始在 Google Analytics 中收集和記錄網站的洞察資料。你該先設定什麼？",
    options: [
      "Analytics 代碼",
      "Firebase SDK",
      "Google Ads",
      "Analytics SDK"
    ],
    correctAnswer: "Analytics 代碼",
    explanation: "必須先在網站上安裝 Google Analytics (分析) 代碼 (G-Tag)，才能開始收集並傳送資料。"
  },
  {
    id: "Q05",
    category: "第一部分：帳戶架構與設定",
    question: "以下哪些功能可用於控制 Google Analytics 儲存使用者層級和事件層級資料的時間？",
    options: [
      "資料保留期限",
      "IP 位址設定",
      "停用資料收集功能",
      "同意聲明模式"
    ],
    correctAnswer: "資料保留期限",
    explanation: "資料保留期限 (Data Retention) 設定可用於控制使用者與事件資料在伺服器上的儲存時間。"
  },
  {
    id: "Q06",
    category: "第一部分：帳戶架構與設定",
    question: "你針對自家網站和行動應用程式建立了 Google Analytics 4 資源。當使用者與網站和應用程式互動時，Google Analytics 會如何評估和記錄各種使用者互動？",
    options: [
      "視為命中",
      "視為工作階段",
      "視為事件",
      "視為觀看"
    ],
    correctAnswer: "視為事件",
    explanation: "GA4 的資料收集模型以「事件」為核心基礎，而非傳統的工作階段或命中。"
  },
  // --- 第二部分：報表與介面操作 ---
  {
    id: "Q07",
    category: "第二部分：報表與介面操作",
    question: "使用者會透過搜尋引擎結果和社群媒體等多種管道，找出並造訪你的網站。你可以透過 Google Analytics「報表」頁面的哪個部分，進一步瞭解使用者是從哪裡造訪網站？",
    options: [
      "獲客",
      "營利",
      "參與度",
      "客層"
    ],
    correctAnswer: "獲客",
    explanation: "「獲客 (Acquisition)」報表包含用戶獲取情況和流量開發資訊，可分析使用者來源。"
  },
  {
    id: "Q08",
    category: "第二部分：報表與介面操作",
    question: "你想瞭解已放送的不同廣告如何在轉換路徑上共同運作，因此決定查看「歸因路徑」報表。你可以在 Google Analytics 4 資源中的哪個位置找到這份報表？",
    options: [
      "如要查看報表，請前往「報表」。",
      "如要查看報表，請前往「廣告」。",
      "如要查看報表，請前往「管理」。",
      "如要查看報表，請前往「探索」。"
    ],
    correctAnswer: "如要查看報表，請前往「廣告」。",
    explanation: "歸因路徑與模式比較等報表位於 GA4 的「廣告 (Advertising)」專區。"
  },
  {
    id: "Q09",
    category: "第二部分：報表與介面操作",
    question: "你能在「即時」報表中看到哪些資訊？",
    options: [
      "過去 12 小時內發生的事件",
      "過去 60 分鐘內發生的事件",
      "過去 30 分鐘內發生的事件",
      "過去 8 小時內發生的事件"
    ],
    correctAnswer: "過去 30 分鐘內發生的事件",
    explanation: "即時 (Realtime) 報表專門顯示過去 30 分鐘內的資料動態。"
  },
  {
    id: "Q10",
    category: "第二部分：報表與介面操作",
    question: "若想在表格報表中並列顯示多組資料以利於檢閱，可以選取 Google Analytics 介面中的哪個元件？",
    options: [
      "選取「比較項目」。",
      "選取「區隔」。",
      "選取「篩選器」。",
      "選取「日期挑選器」。"
    ],
    correctAnswer: "選取「比較項目」。",
    explanation: "「比較項目 (Comparisons)」功能允許在報表中並列顯示不同的資料子集以進行比較。"
  },
  {
    id: "Q11",
    category: "第二部分：報表與介面操作",
    question: "如果想在左側導覽面板建立新的報表，只顯示來源/媒介是桌上型電腦使用者的詳細資料，該使用哪種新的報表範本？",
    options: [
      "使用「流量開發」範本。",
      "使用「到達網頁」範本。",
      "使用「客層詳情」範本。",
      "使用「技術詳情」範本。"
    ],
    correctAnswer: "使用「技術詳情」範本。",
    explanation: "桌上型電腦屬於裝置技術類別，因此應使用「技術詳情」範本來建立相關報表。"
  },
  {
    id: "Q12",
    category: "第二部分：報表與介面操作",
    question: "你想要針對標準表格報表中的資料進行深入的細項分析，你該選取哪項功能？",
    options: [
      "選取「比較項目」。",
      "選取「篩選器」。",
      "選取「次要維度」。",
      "選取「細目」。"
    ],
    correctAnswer: "選取「次要維度」。",
    explanation: "在標準報表表格中，使用「次要維度 (Secondary dimensions)」可對主要維度進行更深入的細分。"
  },
  {
    id: "Q13",
    category: "第二部分：報表與介面操作",
    question: "你的團隊想要在 Google Analytics 資源中變更「獲取新客」報表的預設主要維度，他們可以怎麼做？",
    options: [
      "為報表新增自訂維度。",
      "選擇新的主要維度。",
      "使用自訂功能來編輯內建報表。",
      "以新的主要維度建立探索。"
    ],
    correctAnswer: "使用自訂功能來編輯內建報表。",
    explanation: "在報表表格右上方，點擊自訂編輯。"
  },
  {
    id: "Q14",
    category: "第二部分：報表與介面操作",
    question: "你的同事自訂了一份報表，希望該報表能清晰明瞭。他們應該在哪個位置新增報表，才能讓該報表出現在左側導覽面板？",
    options: [
      "新增至「管理」。",
      "新增至「素材資源庫」。",
      "新增至「探索」。",
      "新增至「集合」。"
    ],
    correctAnswer: "新增至「集合」。",
    explanation: "必須將報表新增至「集合 (Collections)」並發布，該報表才會顯示在左側導覽列中。"
  },
  {
    id: "Q15",
    category: "第二部分：報表與介面操作",
    question: "你想查看常見問題解答的現成資訊卡，以便瞭解使用者如何與應用程式或網站互動。你該前往哪個專區才能找到這類資訊卡？",
    options: [
      "可以在「探索」專區找到這類資訊卡。",
      "可以在「報表」專區找到這類資訊卡。",
      "可以在「廣告」專區找到這類資訊卡。",
      "可以在「管理」專區找到這類資訊卡。"
    ],
    correctAnswer: "可以在「報表」專區找到這類資訊卡。",
    explanation: "GA4 的「報表快照」或各主題報表中包含許多現成的資訊卡，提供常見問題的解答。"
  },
  {
    id: "Q16",
    category: "第二部分：報表與介面操作",
    question: "當你檢視「獲取新客」報表和「流量開發」報表時，這兩份報表醒目顯示的資訊有何差異？",
    options: [
      "「流量開發」報表會顯示將使用者帶往網站的第一個廣告活動/來源/媒介。「獲取新客」報表會顯示工作階段的廣告活動/來源/媒介。",
      "「獲取新客」報表會顯示將使用者帶往網站的第一個廣告活動/來源/媒介。「流量開發」報表會顯示工作階段的廣告活動/來源/媒介。",
      "「流量開發」報表使用以數據為準歸因模式，呈現將使用者帶往網站的廣告活動/來源/媒介。「獲取新客」報表會顯示最終接觸的廣告活動/來源/媒介。",
      "「獲取新客」報表會顯示工作階段的第一個廣告活動/來源/媒介。「流量開發」報表會顯示最終接觸的廣告活動/來源/媒介。"
    ],
    correctAnswer: "「獲取新客」報表會顯示將使用者帶往網站的第一個廣告活動/來源/媒介。「流量開發」報表會顯示工作階段的廣告活動/來源/媒介。",
    explanation: "「獲取新客」關注使用者第一次如何到達 (First user)，而「流量開發」關注每個新工作階段的來源 (Session)。"
  },
  // --- 第三部分：探索 (Explorations) 與進階分析 ---
  {
    id: "Q17",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "如需有助於進一步深入分析顧客參與度的進階技巧，你該開啟 Google Analytics 資源的哪個專區？",
    options: [
      "開啟「廣告」專區。",
      "開啟「管理」專區。",
      "開啟「報表」專區。",
      "開啟「探索」專區。"
    ],
    correctAnswer: "開啟「探索」專區。",
    explanation: "「探索 (Explorations)」專區提供漏斗、路徑、區隔重疊等進階分析工具。"
  },
  {
    id: "Q18",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "可在任意形式報表中包含哪些可用的圖表類型？",
    options: [
      "圓餅圖、圓環圖、地理區域地圖、圓形圖",
      "表格、折線圖、散布圖、長條圖",
      "表格、折線圖、圓形圖、圓環圖",
      "折線圖、長條圖、直方圖、地理區域地圖"
    ],
    correctAnswer: "表格、折線圖、散布圖、長條圖",
    explanation: "任意形式探索支援多種視覺化方式，其中包含表格、折線圖、散布圖和長條圖。"
  },
  {
    id: "Q19",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "以下哪項探索技巧可讓你以圖表呈現使用者完成某件要務或重要轉換前採取的步驟，並確定他們完成或不完成各個步驟的情況？",
    options: [
      "區隔重疊能以圖表呈現這些步驟。",
      "漏斗探索能以圖表呈現這些步驟。",
      "同類群組探索能以圖表呈現這些步驟。",
      "任意形式報表能以圖表呈現這些步驟。"
    ],
    correctAnswer: "漏斗探索能以圖表呈現這些步驟。",
    explanation: "漏斗探索 (Funnel exploration) 專門用於視覺化使用者在特定流程中的步驟以及流失情況。"
  },
  {
    id: "Q20",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "你已進入 Google Analytics 資源的「探索」專區，想要以表格格式自訂指標和維度，該使用以下哪項探索技巧？",
    options: [
      "漏斗探索",
      "任意形式",
      "同類群組探索",
      "區隔重疊"
    ],
    correctAnswer: "任意形式",
    explanation: "任意形式 (Free form) 探索最靈活，適合建立交叉分析表格 (Crosstab) 與自訂指標維度。"
  },
  {
    id: "Q21",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "你想瞭解新使用者在開啟首頁後最常瀏覽的網頁，就在「探索」中建立新的路徑探索，並打算與同事分享。誰預設能看到這項路徑探索？",
    options: [
      "只有你能看到，但你可以分享給其他資源使用者，供他們進行編輯。",
      "只有你能看到，但可以在唯讀模式中與其他資源使用者分享。",
      "資源的所有使用者都能在唯讀模式中看到新的路徑探索。",
      "資源的所有使用者都能看到新的路徑探索並加以編輯。"
    ],
    correctAnswer: "只有你能看到，但可以在唯讀模式中與其他資源使用者分享。",
    explanation: "探索報告預設是私人的，分享後，其他資源使用者僅能以「唯讀」模式檢視，無法直接編輯原始檔。"
  },
  {
    id: "Q22",
    category: "第三部分：探索 (Explorations) 與進階分析",
    question: "在「探索」中建立購物漏斗時，你可以透過哪些維度選擇首頁瀏覽？",
    options: [
      "你可透過「購買」選擇首頁瀏覽。",
      "你可透過「首頁名稱」選擇首頁瀏覽。",
      "你可透過「網頁路徑與畫面類別」選擇首頁瀏覽。",
      "你可以透過「網頁類型」選取首頁瀏覽。"
    ],
    correctAnswer: "你可透過「網頁路徑與畫面類別」選擇首頁瀏覽。",
    explanation: "在 GA4 中，「網頁路徑與畫面類別 (Page path and screen class)」是用來識別特定頁面（如首頁）的標準維度。"
  },
  // --- 第四部分：事件、維度與指標 ---
  {
    id: "Q23",
    category: "第四部分：事件、維度與指標",
    question: "使用者觀看影片時，會在你的網站上觸發事件。以下何者是事件參數？",
    options: [
      "在網站上觀看影片的使用者人數",
      "有多少使用者點開影片所在的網頁",
      "使用者在網站上觀看影片時所用的裝置",
      "在網站上觀看的影片名稱"
    ],
    correctAnswer: "在網站上觀看的影片名稱",
    explanation: "事件參數是用來描述事件的具體細節，「影片名稱」即為描述影片觀看事件的參數。"
  },
  {
    id: "Q24",
    category: "第四部分：事件、維度與指標",
    question: "你是五金行老闆，在自家網站上發布了一部新的步驟影片，方便顧客瞭解如何正確使用你所銷售的工具。Google Analytics 針對使用者與這部影片的互動提供了許多相關資料。以下何者算是 Google Analytics 收集的「使用者屬性」？",
    options: [
      "有多少使用者點開影片所在的網頁",
      "網站上可觀看影片的名稱",
      "影片觀眾的語言偏好設定",
      "影片觀看人數"
    ],
    correctAnswer: "影片觀眾的語言偏好設定",
    explanation: "使用者屬性 (User properties) 描述使用者的特徵（如語言偏好、地點），這些特徵通常不會頻繁變動。"
  },
  {
    id: "Q25",
    category: "第四部分：事件、維度與指標",
    question: "每當有網站訪客在你的網站上瀏覽網頁時，就會觸發 page_view 事件，但你的團隊想定義會在訪客進入特定網頁 (例如首頁) 時觸發的新事件。那麼在 Google Analytics 介面中前往「事件」後，他們該選擇哪個選項？",
    options: [
      "應該選擇「匯入事件」。",
      "應該選擇「標示為重要事件」。",
      "應該選擇「建立事件」。",
      "應該選擇「修改事件」。"
    ],
    correctAnswer: "應該選擇「建立事件」。",
    explanation: "若要基於現有事件（如 page_view）加上條件（如 page_location = 首頁）來生成新事件，應使用「建立事件」。"
  },
  {
    id: "Q26",
    category: "第四部分：事件、維度與指標",
    question: "你的網站上有許多很有價值的事件，例如使用者購買商品或訂閱電子報。你想將這些事件標示為重要事件，你在 Google Analytics 4 資源中該將這些事件標示為什麼？",
    options: [
      "自動事件",
      "建議事件",
      "自訂事件",
      "重要事件"
    ],
    correctAnswer: "重要事件",
    explanation: "對業務有高價值的事件（原稱為轉換），在 GA4 中應標示為「重要事件 (Key Events)」。"
  },
  {
    id: "Q27",
    category: "第四部分：事件、維度與指標",
    question: "你建立了新的選項，讓使用者能在網站上訂閱電子報。你想將這類新的訂閱事件標示為重要事件，並將已訂閱的使用者建立為新的目標對象。你可以在 Google Analytics 4 資源的哪個部分管理重要事件與目標對象？",
    options: [
      "管理",
      "廣告",
      "探索",
      "報表"
    ],
    correctAnswer: "管理",
    explanation: "重要事件與目標對象的設定與管理功能位於「管理 (Admin)」專區的資源設定中。"
  },
  {
    id: "Q28",
    category: "第四部分：事件、維度與指標",
    question: "為了瞭解過去 30 天使用者來自哪些類型的裝置 (如電腦或手機)，你製作了一份報表。在這份報表中，以下何者算是 Google Analytics 的「指標」？",
    options: [
      "使用者進入網站的管道",
      "過去 30 天的資料範圍設定",
      "手機的使用者人數",
      "裝置類型：電腦和手機"
    ],
    correctAnswer: "手機的使用者人數",
    explanation: "指標 (Metric) 是定量的測量數據，「使用者人數」是可以計算的數值，因此是指標。"
  },
  {
    id: "Q29",
    category: "第四部分：事件、維度與指標",
    question: "為了瞭解來自電腦或手機等裝置的使用者人數，你製作了一份報表，列出過去 30 天各裝置類型的人數資料。在這份報表中，裝置類型是什麼？",
    options: [
      "使用者",
      "事件",
      "指標",
      "維度"
    ],
    correctAnswer: "維度",
    explanation: "維度 (Dimension) 是資料的屬性或類別，「裝置類型」是用來分類使用者的屬性，因此是維度。"
  },
  {
    id: "Q30",
    category: "第四部分：事件、維度與指標",
    question: "如果你管理的網誌有多位作家，你可以使用什麼來記錄每個文章頁面上相關作家的姓名？",
    options: [
      "自訂指標",
      "自訂表格",
      "自訂使用者參數",
      "自訂維度"
    ],
    correctAnswer: "自訂維度",
    explanation: "作家姓名是描述文章頁面的文字屬性，應使用「自訂維度」來記錄。"
  },
  {
    id: "Q31",
    category: "第四部分：事件、維度與指標",
    question: "如要報表中查看顧客獎勵計畫的會員狀態，應該將自訂維度的範圍設為下列何者？",
    options: [
      "項目",
      "使用者",
      "活動",
      "工作階段"
    ],
    correctAnswer: "使用者",
    explanation: "會員狀態是跟隨使用者的屬性（User-scoped），不隨每次事件改變，因此範圍應設為「使用者」。"
  },
  {
    id: "Q32",
    category: "第四部分：事件、維度與指標",
    question: "如要判斷使用者透過哪個來源 (例如「自然搜尋」或「參照連結網址」等) 前往你的網站，應該使用什麼維度？",
    options: [
      "應該使用工作階段主要管道群組 (預設管道群組)。",
      "應該使用 Google Ads 廣告活動。",
      "應該使用網頁標題與畫面類別。",
      "應該使用工作階段來源/媒介。"
    ],
    correctAnswer: "應該使用工作階段主要管道群組 (預設管道群組)。",
    explanation: "「預設管道群組」會自動將流量歸類為自然搜尋 (Organic Search)、參照連結 (Referral) 等高層級類別。"
  },
  // --- 第五部分：進階功能、AI 與整合 ---
  {
    id: "Q33",
    category: "第五部分：進階功能、AI 與整合",
    question: "你的團隊想要監控網站流量出現的非預期陡升或驟降，Google Analytics 的哪項內建功能可以醒目顯示這些事件？",
    options: [
      "「以數據為準歸因」可醒目顯示這些事件。",
      "「異常偵測」可醒目顯示這些事件。",
      "「機器學習」可醒目顯示這些事件。",
      "「Google AI」可醒目顯示這些事件。"
    ],
    correctAnswer: "「異常偵測」可醒目顯示這些事件。",
    explanation: "「異常偵測 (Anomaly detection)」利用統計模型來識別並醒目顯示資料中的異常波動。"
  },
  {
    id: "Q34",
    category: "第五部分：進階功能、AI 與整合",
    question: "Google Analytics 的哪項功能仰賴 Google AI 和機器學習技術，來評估無法直接觀察得知的轉換情形？",
    options: [
      "重要事件模擬功能可評估轉換情形。",
      "轉換回溯期功能可評估轉換情形。",
      "轉換事件功能可評估轉換情形。",
      "歸因路徑功能可評估轉換情形。"
    ],
    correctAnswer: "重要事件模擬功能可評估轉換情形。",
    explanation: "重要事件模擬 (Key event modeling，舊稱轉換模擬) 使用機器學習來填補因隱私限制而無法觀察到的資料缺口。"
  },
  {
    id: "Q35",
    category: "第五部分：進階功能、AI 與整合",
    question: "由於你設定了網站資料串流，網站已經能為 Google Analytics 資源提供資料。你發現網站資料串流啟用了加強型評估功能。啟用這項設定會產生什麼影響？",
    options: [
      "系統會從網站收集更多事件，你不必修改網站程式碼",
      "網站資料串流的轉換報表會使用機器學習技術，將功勞分配給不同管道",
      "事件可與已登入的使用者建立關聯，以便啟用跨裝置報表",
      "行動應用程式中的事件可與現有網站資料結合"
    ],
    correctAnswer: "系統會從網站收集更多事件，你不必修改網站程式碼",
    explanation: "加強型評估 (Enhanced measurement) 可自動追蹤捲動、外連點擊、影片參與等事件，無需修改程式碼。"
  },
  {
    id: "Q36",
    category: "第五部分：進階功能、AI 與整合",
    question: "你透過 POS 系統收集的資料，可與自家網站和應用程式傳送至 Google Analytics 的資料相輔相成。以下哪項功能可用於收集事件並直接傳送至 Google Analytics 伺服器？",
    options: [
      "HTTP 要求",
      "資料匯入",
      "Measurement Protocol",
      "修改事件"
    ],
    correctAnswer: "Measurement Protocol",
    explanation: "Measurement Protocol 允許開發者透過 HTTP 要求，將線下或伺服器端的互動資料直接發送至 GA4 伺服器。"
  },
  {
    id: "Q37",
    category: "第五部分：進階功能、AI 與整合",
    question: "將 Google Analytics 資料匯出至 BigQuery 後，你可以如何運用資料？",
    options: [
      "你可以透過 SQL 查詢資料來找出問題解答，並取得有關產品、使用者和通路的洞察資訊",
      "你可以查看當機資料、通知成效和深層連結成效等應用程式專屬報表",
      "你可以使用目標對象功能來指定網站實驗的目標對象，並測試網頁的變化版本",
      "你可以根據轉換次數設定廣告活動出價，並使用目標對象功能來指定廣告活動的目標對象"
    ],
    correctAnswer: "你可以透過 SQL 查詢資料來找出問題解答，並取得有關產品、使用者和通路的洞察資訊",
    explanation: "BigQuery 是資料倉儲，匯出後可使用 SQL 語法進行複雜查詢與進階分析。"
  },
  {
    id: "Q38",
    category: "第五部分：進階功能、AI 與整合",
    question: "如要將 Google Analytics 資源連結至 BigQuery，選擇資料的匯出頻率時會看到兩個選項，分別是？",
    options: [
      "兩個選項分別為「每小時」和「串流」。",
      "兩個選項分別為「每週」和「串流」",
      "兩個選項分別為「每日」和「每週」。",
      "兩個選項分別為「每日」和「串流」。"
    ],
    correctAnswer: "兩個選項分別為「每日」和「串流」。",
    explanation: "GA4 匯出至 BigQuery 提供「每天 (Daily)」批次匯出和「串流 (Streaming)」即時匯出兩種選項。"
  },
  {
    id: "Q39",
    category: "第五部分：進階功能、AI 與整合",
    question: "你打算建立資訊主頁，以檢視分析資料及其他業務應用程式中的店內顧客購買資料。此時該使用 Google Analytics 的哪項功能？",
    options: [
      "Data API",
      "Firebase SDK",
      "Admin API",
      "Measurement Protocol"
    ],
    correctAnswer: "Data API",
    explanation: "Google Analytics Data API 允許以程式化方式存取報表資料，適合用於建立自訂儀表板。"
  },
  {
    id: "Q40",
    category: "第五部分：進階功能、AI 與整合",
    question: "目標對象觸發條件可讓你執行什麼動作？",
    options: [
      "根據觸發的特定事件建立新目標對象",
      "根據滿足的目標對象規則建立新事件",
      "根據預測指標建立新目標對象",
      "根據現有事件參數建立新事件"
    ],
    correctAnswer: "根據滿足的目標對象規則建立新事件",
    explanation: "目標對象觸發條件 (Audience triggers) 允許在使用者符合目標對象定義時，自動觸發一個新的事件。"
  },
  {
    id: "Q41",
    category: "第五部分：進階功能、AI 與整合",
    question: "你可以使用這項 Analytics 功能將自己的 ID 與個別顧客建立關聯，針對顧客在不同平台和裝置上的各種互動連結他們的行為。",
    options: [
      "裝置 ID",
      "預測目標對象",
      "目標對象觸發條件",
      "User-ID"
    ],
    correctAnswer: "User-ID",
    explanation: "User-ID 功能允許將您自己的客戶識別碼與 GA4 數據關聯，實現跨裝置與跨平台的使用者追蹤。"
  },
  {
    id: "Q42",
    category: "第五部分：進階功能、AI 與整合",
    question: "如果想深入瞭解哪些自然搜尋查詢會將使用者帶往你的網站，該將哪個平台連結至 Analytics？",
    options: [
      "Firebase",
      "Search Console",
      "Google Ads",
      "Search Ads 360"
    ],
    correctAnswer: "Search Console",
    explanation: "Google Search Console 提供自然搜尋查詢 (關鍵字)、點擊率和排名資料，連結後可在 GA4 中查看。"
  },
  {
    id: "Q43",
    category: "第五部分：進階功能、AI 與整合",
    question: "以下哪項描述符合 Google Analytics 與 Google Ads 完成連結後，Google Analytics 轉換事件在 Google Ads 中的使用方式？",
    options: [
      "Google Ads 可運用轉換事件建立新的關鍵字提案。",
      "Google Ads 可運用轉換事件調整和改善廣告文案。",
      "Google Ads 可運用轉換事件改善廣告刊登位置的出價。",
      "Google Ads 可運用轉換事件呈現業界基準化資料。"
    ],
    correctAnswer: "Google Ads 可運用轉換事件改善廣告刊登位置的出價。",
    explanation: "GA4 的轉換事件可匯入 Google Ads，供智慧出價 (Smart Bidding) 演算法優化廣告出價。"
  },
  {
    id: "Q44",
    category: "第五部分：進階功能、AI 與整合",
    question: "Google Ads 連結至 Google Analytics 後，如何運用 Google Analytics 目標對象？",
    options: [
      "可聯絡 Google Ads 目標對象以進行顧客研究",
      "Google Ads 目標對象可用來指定廣告活動的目標對象",
      "Google Ads 目標對象可用來查看業界基準化資料",
      "Google Ads 目標對象可用來調整廣告活動的指定地理區域"
    ],
    correctAnswer: "Google Ads 目標對象可用來指定廣告活動的目標對象",
    explanation: "連結後，GA4 建立的目標對象可共享給 Google Ads，用於再行銷或類似目標對象投放。"
  },
  {
    id: "Q45",
    category: "第五部分：進階功能、AI 與整合",
    question: "你想根據貴商家適用的參數 (例如曾購物的使用者) 區隔使用者，為電子商務網站建立新目標對象。以下哪種做法可以產生預測目標對象？",
    options: [
      "你將曾把商品加進購物願望清單的使用者建立為目標對象",
      "你將過去 30 天內曾購物的使用者建立為目標對象",
      "你將曾開始結帳但沒有完成購物的使用者建立為目標對象",
      "你將未來七天內可能購物的使用者建立為目標對象"
    ],
    correctAnswer: "你將未來七天內可能購物的使用者建立為目標對象",
    explanation: "「未來七天內可能購物」是基於機器學習預測的行為，因此屬於預測目標對象。"
  },
  {
    id: "Q46",
    category: "第五部分：進階功能、AI 與整合",
    question: "如果為資源啟用了廣告個人化功能，但想排除特定事件，這些排除事件的資料會受到什麼影響？",
    options: [
      "該資料只會用於評估用途",
      "該資料只會用於 Google Ads 目標對象",
      "該資料只會在「報表」和「探索」專區中提供",
      "該資料只會在「廣告」專區中提供"
    ],
    correctAnswer: "該資料只會用於評估用途",
    explanation: "將事件標示為排除在廣告個人化之外，該資料仍會用於 GA4 的報表與評估，但不會用於建立廣告受眾。"
  },
  // --- 第六部分：GA4 360 (付費版) 與疑難排解 ---
  {
    id: "Q47",
    category: "第六部分：GA4 360 (付費版) 與疑難排解",
    question: "如果想篩選資料並針對特定用途或目標對象建立新資料集，該使用下列哪項 Analytics 360 功能？",
    options: [
      "綜覽資源",
      "資料串流",
      "組織",
      "子資源"
    ],
    correctAnswer: "子資源",
    explanation: "子資源 (Sub-properties) 是 GA4 360 的功能，可從來源資源篩選資料並建立獨立的資料集。"
  },
  {
    id: "Q48",
    category: "第六部分：GA4 360 (付費版) 與疑難排解",
    question: "哪項 Analytics 360 功能可讓你結合多個來源資源的資料來建立新資料集，以便跨產品、品牌或區域綜覽業務成效？",
    options: [
      "綜覽資源",
      "資料串流",
      "子資源",
      "組織"
    ],
    correctAnswer: "綜覽資源",
    explanation: "綜覽資源 (Roll-up properties) 可將多個來源資源的資料匯總，以查看跨品牌或跨區域的整體成效。"
  },
  {
    id: "Q49",
    category: "第六部分：GA4 360 (付費版) 與疑難排解",
    question: "你發現 Google Analytics 資源有資料不一致的問題，想試著進行疑難排解，你可以使用下列哪一個維度來找出異常狀況或可能存在的問題？",
    options: [
      "使用國家/地區、OS 版本、作業系統與版本。",
      "使用網頁路徑、螢幕解析度、項目名稱。",
      "使用項目名稱、裝置類別、日期。",
      "使用 OS 版本、作業系統與版本、重要事件。"
    ],
    correctAnswer: "使用國家/地區、OS 版本、作業系統與版本。",
    explanation: "使用國家/地區、OS 版本、作業系統與版本。"
  },
  {
    id: "Q50",
    category: "第六部分：GA4 360 (付費版) 與疑難排解",
    question: "當你想確定使用者在產品詳細資料頁面上的行為，是否會因為裝置類型而有所不同時，應該提取哪種報表？",
    options: [
      "應該提取「網頁和畫面」報表。",
      "應該提取「獲取新客」報表。",
      "應該提取「事件」報表。",
      "應該提取「技術詳情」報表。"
    ],
    correctAnswer: "應該提取「技術詳情」報表。",
    explanation: "涉及瀏覽器、作業系統、裝置型號等技術規格的行為分析，應使用「技術詳情」報表。"
  },
  // --- 第七部分：補充題庫 (教師提供之進階考題) ---
  {
    id: "Q51",
    category: "第一部分：帳戶架構與設定",
    question: "下列哪一種模型反映了 Google Analytics (分析) 帳戶的階層結構？",
    options: [
      "資料串流 > 帳戶 > 資源",
      "資源 > 資料串流 > 帳戶",
      "帳戶 > 資源 > 資料串流",
      "資源 > 帳戶 > 資料串流"
    ],
    correctAnswer: "帳戶 > 資源 > 資料串流",
    explanation: "GA4 的標準層級結構為：帳戶 (Account) > 資源 (Property) > 資料串流 (Data Stream)。"
  },
  {
    id: "Q52",
    category: "第七部分：補充題庫",
    question: "你想執行查詢並將部分離線資料與 Analytics(分析)資料結合。為此，你希望將 Google Analytics(分析)資料匯出至 BigQuery。請問哪些 Analytics(分析)資源可以將資料匯出至 BigQuery？",
    options: [
      "採用 GA4 的標準或 Analytics(分析) 360 資源",
      "採用通用 Analytics(分析)的標準或 Analytics(分析) 360 資源",
      "僅限 GA4 或通用 Analytics(分析)中的標準資源",
      "僅限 GA4 或通用 Analytics(分析)中的 Analytics(分析) 360 資源"
    ],
    correctAnswer: "採用 GA4 的標準或 Analytics(分析) 360 資源",
    explanation: "GA4 的所有版本（包括免費標準版與付費 360 版）皆直接支援 BigQuery 匯出功能。"
  },
  {
    id: "Q53",
    category: "第七部分：補充題庫",
    question: "你在線上銷售商品，但以離線方式儲存個別商品的資料。哪一項功能可讓你上傳當中商品資料要與 Analytics(分析)資料結合的 CSV 檔案？",
    options: [
      "修改事件",
      "資料匯入",
      "測量協議 (Measurement Protocol)",
      "HTTP 要求"
    ],
    correctAnswer: "資料匯入",
    explanation: "「資料匯入 (Data Import)」功能允許上傳 CSV 檔案，將離線資料（如產品成本、尺寸）與線上數據結合。"
  },
  {
    id: "Q54",
    category: "第七部分：補充題庫",
    question: "哪種歸因模式會透過使用機器學習演算法，為不同接觸點發生的轉換分配功勞？",
    options: [
      "最初點擊",
      "時間衰減",
      "最終點擊",
      "以數據為準"
    ],
    correctAnswer: "以數據為準",
    explanation: "「以數據為準 (Data-driven)」歸因模式利用機器學習分析帳戶中的歷史數據，為路徑中的接觸點分配功勞。"
  },
  {
    id: "Q55",
    category: "第七部分：補充題庫",
    question: "哪項 Analytics(分析)功能在啟用後，會將從網站或應用程式使用者收集到的事件資料，與同意分享這項資訊的已登入使用者的 Google 帳戶建立關聯？",
    options: [
      "谷歌廣告",
      "Google 信號 (Google Signals)",
      "用戶身份",
      "谷歌搜索控制台"
    ],
    correctAnswer: "Google 信號 (Google Signals)",
    explanation: "Google 信號啟用後，可收集跨裝置資料並與已登入 Google 帳戶且開啟廣告個人化的使用者關聯。"
  },
  {
    id: "Q56",
    category: "第七部分：補充題庫",
    question: "你想將新的 Google Ads 帳戶連結至 Google Analytics (分析)資源，以便查看詳細的行銷廣告活動資料。請問你可以在 Google Analytics(分析) 4 資源中的哪個位置管理產品連結(例如與 Google Ads 的連結)？",
    options: [
      "廣告",
      "探索",
      "管理",
      "設定"
    ],
    correctAnswer: "管理",
    explanation: "產品連結（如 Google Ads、BigQuery、Search Console）是在「管理」專區的資源層級進行設定。"
  },
  {
    id: "Q57",
    category: "第七部分：補充題庫",
    question: "以下哪種歸因模式會將轉換功勞平均分配給消費者按下或互動後，才完成轉換的所有管道？",
    options: [
      "時間衰減",
      "以數據為準",
      "線性",
      "根據排序"
    ],
    correctAnswer: "線性",
    explanation: "「線性 (Linear)」歸因模式會將功勞平均分配給轉換路徑中的每一個接觸點。"
  },
  {
    id: "Q58",
    category: "第七部分：補充題庫",
    question: "以下哪個平台能連結至 Analytics(分析)，以便你對特別量身訂做的目標對象測試網頁的變化版本？",
    options: [
      "修改事件",
      "搜索控制台",
      "Firebase",
      "Google 最佳化工具 (Google Optimize)"
    ],
    correctAnswer: "Google 最佳化工具 (Google Optimize)",
    explanation: "Google Optimize 用於進行 A/B 測試與網頁個人化實驗，可針對 GA4 目標對象呈現不同內容（註：服務已終止，但為題庫標準答案）。"
  },
  {
    id: "Q59",
    category: "第七部分：補充題庫",
    question: "你目前使用的是最終點擊歸因。請問以下哪些報表可讓你瞭解最初點擊歸因對管道和廣告活動的重視程度？",
    options: [
      "區隔重疊",
      "模式比較",
      "轉換路徑",
      "漏斗探索"
    ],
    correctAnswer: "模式比較",
    explanation: "「模式比較 (Model Comparison)」報表允許同時比較不同歸因模式（如最終點擊 vs 最初點擊）下的成效差異。"
  },
  {
    id: "Q60",
    category: "第七部分：補充題庫",
    question: "如果從 Google Analytics (分析)帳戶中刪除了資源，資源過幾天後會永久刪除？",
    options: [
      "14",
      "35",
      "60",
      "7"
    ],
    correctAnswer: "35",
    explanation: "資源刪除後會進入垃圾桶，保留 35 天後才會被系統永久刪除，期間內可進行還原。"
  },
  {
    id: "Q61",
    category: "第七部分：補充題庫",
    question: "Google Analytics(分析)4 資源與通用 Analytics(分析)資源主要有何差異？",
    options: [
      "Google Analytics(分析)4 資源是以「工作階段」做為資料收集和報表的基礎，通用 Analytics(分析)則是以「事件」做為基礎。",
      "Google Analytics(分析)4 資源是以「維度」做為資料收集和報表的基礎，通用 Analytics(分析)則是以「事件」做為基礎。",
      "Google Analytics(分析)4資源是以「工作階段」做為資料收集和報表的基礎，通用 Analytics(分析)則是以「維度」做為基礎。",
      "Google Analytics(分析)4 資源是以「事件」做為資料收集和報表的基礎，通用 Analytics(分析)則是以「工作階段」做為基礎。"
    ],
    correctAnswer: "Google Analytics(分析)4 資源是以「事件」做為資料收集和報表的基礎，通用 Analytics(分析)則是以「工作階段」做為基礎。",
    explanation: "GA4 與舊版 UA 最大的差異在於資料模型：GA4 全面基於「事件」，而 UA 基於「工作階段」。"
  },
  {
    id: "Q62",
    category: "第七部分：補充題庫",
    question: "如果你目前在網站中使用 Google Analytics (分析)，請問在以下哪種情況下最適合使用「參與度總覽」報表？",
    options: [
      "你想監控網站上發生的使用者活動。",
      "你想進一步瞭解使用者透過線上瀏覽和購買活動表露出的興趣。",
      "你想瞭解網站上的哪些網頁能吸引最多流量。",
      "你想瞭解使用者是從哪裡抵達網站。"
    ],
    correctAnswer: "你想監控網站上發生的使用者活動。",
    explanation: "「參與度總覽」主要用於概覽使用者的互動狀況（活動），如參與時間、事件數等。"
  }
];