function grader(){
    // 建構子 ScoreOutputer 接受一個字串，該字串為 csv 的檔案名稱
		// 以下面範例，檔名就為 "109598105(總分: 6).csv"
		var so = new ScoreOutputer("109598008");
		so.installCSS(function () {
			// 安裝 bootstrap 的 css，如果在 html 上方引用 bootstrap 5.1.1 的話就不用使用 installCSS ，注意一定要 bootstrap css 5.1.1 版
			// installCSS 接收一個 callback 當作參數，作為成功安裝 bootstrap css 的回呼函式

			//加入項目，分數，完成狀況
			//第一個參數為 項目名稱
			//第2個參數為 項目分數
			//第3個參數為 完成狀況，有完成 true/未完成 false
			//有幾個項目就呼叫幾個 addChild
			//addChild 要比 renderModal 先呼叫
			so.addChild("繪製出 5 個畫面", 1, true);
			so.addChild("回答問題", 1, false);
			so.addChild("可按鍵選擇上 / 下一隻角色", 1, false);
			so.addChild("讀取作業 2 儲存的座標點在眼睛上繪製出分割線", 1, false);
			so.addChild("可選擇當下控制哪個虹膜", 1, false);
			so.addChild("按滑鼠左鍵控制虹膜移動，右鍵停止", 2, false);
			so.addChild("複製參數至對應目標參數", 2, false);
			so.addChild("可儲存虹膜轉動角度", 1, false);

			//產生自評表，參數如下所示
			so.renderModal(
				//1. 自評表插入位置 (預設 document.body)
				document.body,
				//2. 自評表背景 (預設紅色)
				'rgba(100,45,58,1)',
				//3. 自評表文字顏色 (預設白色)
				'white',
				//4. 自評表文字大小 (預設 14pt)
				'15pt',
				//5. 自評表 checkbox 文字大小 (預設多少忘了)
				'15px',
				//6. 自評表標題 (預設 "自我評分表")
				dialogTitle = "自我評分表"
			);

			//設定下載按鈕 <-- 一定要呼叫這個函數，不然沒有下載功能
			so.installDownloadBtn();

			//產生 "開啟自評表按鈕"
			so.renderBtn(
				//自評表按鈕插入位置
				document.querySelector("#info"),
				//自評表按鈕文字
				"開啟自評表"
			);
		});
}