var rnd = 10000;



setInterval(
	function(){
		

		function 賣米包(){
			$('.composer_rich_textarea').focus().text('出售麵包:moneybag:');
			$('.im_submit').mousedown();
		}
		function 去戰鬥(){
			$('.composer_rich_textarea').focus().text('戰鬥⚔');
			$('.im_submit').mousedown();
			while(!TF擊敗玩家()){		
			}
			$('.composer_rich_textarea').focus().text('尋找敵人👁');
			$('.im_submit').mousedown();
			while(!TF展開攻勢()){		
			}
			$('.composer_rich_textarea').focus().text('進攻!⚔');
			$('.im_submit').mousedown();
			while(!TF擊敗玩家()){		
				if(TF額外徵募()){
					$('.composer_rich_textarea').focus().text('增派援軍!🗡');
					$('.im_submit').mousedown();
				}
			}
		}
		function 去工作(){
			$('.composer_rich_textarea').focus().text(':bread:工作!');
			$('.im_submit').mousedown();
			console.log("工作!");
		
		}
		function 做任務(){
			$('.composer_rich_textarea').focus().text(':rocket:任務');
			$('.im_submit').mousedown();
			while(!TF選擇任務()){
			}
			$('.composer_rich_textarea').focus().text(':star::star::star:拯救村落');
			$('.im_submit').mousedown();
			while(!TF襲擊村落()){
			}
			$('.composer_rich_textarea').focus().text('進行任務🗡');
			$('.im_submit').mousedown();
			while(!TF選擇任務()){
				if(TF額外徵募()){
					$('.composer_rich_textarea').focus().text('增派援軍!🗡');
					$('.im_submit').mousedown();
				}
			}
		}
		function 更新資料(){
			$('.composer_rich_textarea').focus().text(':arrows_clockwise:更新資料');
			$('.im_submit').mousedown();
		}
		
		function TF選擇任務(){
			return (/您可以選擇一項任務/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}
		function TF襲擊村落(){
			return (/山賊們襲擊了一條村落/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}
		function TF額外徵募(){
			return (/額外徵募/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}
		function TF擊敗玩家(){
			return (/擊敗其他玩家/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}
		function TF展開攻勢(){
			return (/展開攻勢/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}
		function TF村落(){
			return (/村落/.test($('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html()))
		}


		/* MAIN */
		更新資料();
		while(!TF村落()){}
		暫存字串 = $('.im_history_message_wrap:last-child > .im_message_outer_wrap > .im_message_wrap > div.im_content_message_wrap > .im_message_body > div[my-message-body="historyMessage"] > .im_message_text').html();
		console.log(暫存字串);
		麵包數量 = 暫存字串.match(/\d*\s\/\s\d*/);
		console.log(麵包數量);
		麵包_倉庫 = 麵包數量[0].replace(/\d*\s\/\s/, "");
		console.log(麵包_倉庫);
		麵包_庫存 = 麵包數量[0].replace(/\s\/\s\d*/, "");
		console.log(麵包_庫存);
		錢袋_庫存 = 暫存字串.match(/金錢:\s\d*/)[0].replace("金錢: ", "");
		console.log(錢袋_庫存);


		if (麵包_庫存 + 100 > 麵包_庫存){
			賣米包();
		}
		if (錢袋_庫存 > 200){
			去戰鬥();
		}else if (錢袋_庫存 > 50){
			做任務();
		}else{
			去工作();
		}
		rnd = Math.random()*10000+1000;
	},
rnd);


