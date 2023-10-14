$(function(){
  const keyboard = new KeyBoard();
  const keydata = new KeyData();
  const finger = new Fingers();
  let page='';
  let scene=null;
  let nexts='';

  let gamedata=[];
  let idx1,idx2;
  const mode='';//DBG'; //;
  $('#page').on('change',function(){
    const newpage=$('#page').val();
    switch(newpage){
      case 'toppage':
        top(newpage);
        break;
      case 'mainpage':
        main(newpage);
        break;
      case 'scorepage':
        score(newpage);
        break;
    }
  });
  $('#scene').on('change',function(){
    const pval=$('#page').val();
    const sval=$('#scene').val();
    const t=$('#toppage');
    const m=$('#input');
    const s=$('#scorepage');
    let div='',div2='',messagestr='';
    switch(sval){
      case 'scene1':
        t.html( $('<div>',{text:'タイピング練習アプリです。'}) );
        t.append( $('<br>') );
        t.append( $('<div>',{text:'まずは、サウンド出力をしますか？(キー入力)。'}) );
        t.append( $('<br>') );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'Y'}) );
        div.append( $('<div>',{text:'・・・・・効果音を出力する'}) );
        t.append( div );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'N'}) );
        div2=$('<div>',{text:'・・・・・効果音を出力しない(',class:'df'});
        div2.append( $('<div>',{class:"lbutton w100px",text:'スペース'}) );
        div2.append('キーでも可)');
        div.append(div2);
        t.append( div );
        break;
      case 'scene2':
        t.html( $('<div>',{text:'　タイピング練習アプリでは次に'}) );
        t.append( $('<br>') );
        t.append( $('<div>',{text:'キーボードの種類を選びましょう(キー入力)。'}) );
        t.append( $('<br>') );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<span>',{class:"lbutton wh20px",text:'j'}) );
        div.append( '・・・・・日本語キーボード' );
        t.append( div );
        div=$('<div>',{class:'marginl16px df'});
        div.append( $('<span>',{class:"lbutton wh20px",text:'e'}) );
        div.append($('<div>',{text:'・・・・・英語キーボード'}) );
        t.append( div );
        t.append( $('<br>') );
        break;
      case 'scene3':
        messagestr='　タイピング練習アプリでは、';
      case 'scene3_2':
        t.html( $('<div>',{text:messagestr}) );
        if(messagestr!='')t.append( $('<br>次に、') );
        t.append( $('<div>',{text:'練習のレベルを選びましょう(キー入力)。'}) );
        t.append( $('<br>') );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'1'}) );
        div.append( $('<div>',{text:'・・・・・初級(1段ずつ)'}) );
        t.append( div );
        div=$('<div>',{class:'marginl16px margind8px df opacity05'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'2'}) );
        div.append( $('<div>',{text:'・・・・・単語を入力(1段ずつ)'}) );
        t.append( div );
        div=$('<div>',{class:'marginl16px margind8px df opacity05'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'3'}) );
        div.append( $('<div>',{text:'・・・・・上級(文章を入力)'}) );
        t.append( div );
        t.append( $('<br>') );
        keydata.step=0;
        if(pval!='toppage')
          $('#page').val('toppage').change();
        break;
      case 'scene4':
        messagestr='　タイピング練習アプリを始める前の最後の質問です';
      case 'scene4_2':
        t.html( $('<div>',{text:messagestr}) );
        if(messagestr!='')t.append( $('<br>') );
        t.append( $('<div>',{text:'ヘルプ機能を使うか選びましょう(キー入力)。'}) );
        t.append( $('<br>') );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'Y'}) );
        div2=$('<div>',{text:'・・・・・次のキーをガイド表示(',class:'df'});
        div2.append( $('<div>',{class:"lbutton w100px",text:'スペース'}) );
        div2.append('キーでも可)');
        div.append(div2);
        t.append( div );
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( $('<div>',{class:"lbutton wh20px",text:'N'}) );
        div.append( $('<div>',{text:'・・・・・補助機能は使わない'}) );
        t.append( div );
        break;
      case 'scene5':
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( 'レベル'+keydata.level+'のステップ'+(keydata.step+1)+'の開始は' );
        div.append( $('<span>',{class:'lbutton w100px',text:'スペース'}) );
        div.append( 'キー を押下。' );
        m.html( div );
        gamedata=keydata.make(mode,keyboard.klang);
        if(pval!='mainpage')
          $('#page').val('mainpage').change();
        break;
      case 'scene5_3':
        m.html( $('<div>',{text:'３',class:'fadeout1'}) );
        const time2=(mode=='DBG')?'1':'1000';
        setTimeout(() => {
          $('#scene').val('scene5_2').change();
        }, time2);
        break;
      case 'scene5_2':
        m.html( $('<div>',{text:'２',class:'fadeout1'}) );
        setTimeout(() => {
          $('#scene').val('scene5_1').change();
        }, "1000");
        break;
      case 'scene5_1':
        m.html( $('<div>',{text:'１',class:'fadeout1'}) );
        setTimeout(() => {
          $('#scene').val('scene5_0').change();
        }, "1000");
        break;
      case 'scene5_0':
        m.html( $('<div>',{text:'開始',class:'fadeout2'}) );
        const time3=(mode=='DBG')?'100':'750';
        setTimeout(() => {
          $('#scene').val('game').change();
        }, time3);
        break;
      case 'scene6':
        div=$('<div>',{class:'marginl16px margind8px df'});
        div.append( 'レベル'+keydata.level+'のステップ'+(keydata.step+1)+'の開始を開始します。' );
        m.html( div );
        const time4=(mode=='DBG')?'500':'1500';
        setTimeout(() => {
          $('#scene').val('scene5_0').change();
        }, time4);
        gamedata=keydata.make(mode,keyboard.klang);
        if(pval!='mainpage')
          $('#page').val('mainpage').change();
        break;

      case 'game':
        idx1=idx2=0;
        print1line();
        break;

      case 'score01':
        s.html( $('<div>',{text:'レベル'+keydata.level+'のステップ'+(keydata.step+1)+'が完了。'}) );
        s.append( $('<br>') );

        div=$('<div>',{text:'次へ進む場合は',class:'marginl16px margind8px df'});
        div.append( $('<div>').append( $('<span>',{class:'lbutton w100px',text:'スペース'}) ) );
        div.append('キーを押下。');
        s.append(div);
        s.append( $('<br>') );
        $('#page').val('scorepage').change();
        // if(keydata.step==(KeyData.steps.length-1))
        //   $('#scene').val('score02').change();
        break;

      case 'score02':
        s.html( $('<div>',{text:'レベル'+keydata.level+'の練習が終わりました。'}) );
        s.append( $('<br>') );
        div=$('<div>',{text:'次へ進む場合は',class:'marginl16px margind8px df'});
        div.append( $('<div>').append( $('<span>',{class:'lbutton w40px',text:'スペース'}) ) );
        div.append('キーを押してください。');
        s.append(div);
        s.append( $('<br>') );
        $('#page').val('scorepage').change();
        break;
    }
    scene=sval;
  });
  $('#scene').val('scene1').change();
  $('#page').val('toppage').change();

  $('body').on('keyup',function(e){
    const key=e.keyCode;
    let nexts=''
    if(key!='' && key!=null){
      switch(scene){
        case 'scene1':
          nexts='scene2';
          switch(key){
            case 89:keydata.sound=true;break;
            case 32:case 78:keydata.sound=false;break;
            default:
              nexts='';
          }
          break;
        case 'scene2':
          nexts='scene3';
          let klang='';
          switch(key){
            case 74:
              klang='japanese';
              break;
            case 69:
              klang='english';
              break;
            default:
              if(keydata.sound)$("#sndbuu").get(0).play();
              nexts='';
          }
          if(klang!=''){
            keyboard.create(klang);
          }      
          break;
        case 'scene3':
        case 'scene3_2':
          nexts='scene4';
          if(scene!='scene3') nexts='scene4_2';
          switch(key){
            case 49:keydata.level=1;break;
            case 50:keydata.level=2;break;
            case 51:keydata.level=3;break;
            default:
              if(keydata.sound)$("#sndbuu").get(0).play();
              nexts='';
          }
          if(keydata.level==1){
          }else{
            nexts='';$("#sndbuu").get(0).play();
          }
          break;
        case 'scene4':
        case 'scene4_2':
          nexts='scene5';
          switch(key){
            case 32:case 89:keydata.help=true;break;
            case 78:keydata.help=false;break;
            default:
              if(keydata.sound)$("#sndbuu").get(0).play();
              nexts='';
          }
          break;
        case 'scene5':
          nexts=(mode=='DBG')?'scene5_0':'scene5_3';
          if(key!=32)nexts='';
          break;

        case 'game':
          const code=KeyData.keycodes[key];
          const char=code==undefined?null:code.toLowerCase();
          if(char==gamedata[idx1][idx2]){
            $('#inp'+idx2).removeClass('nextchar');
            const idx=keyboard.searchindex(gamedata[idx1][idx2].toUpperCase());
            if(idx!=null){
              $('#'+idx).removeClass('keydownt');
              $('#'+idx).addClass('keycol');
            }
            idx2++;
            if(idx2<gamedata[idx1].length){
              $('#inp'+idx2).addClass('nextchar');
              if(keydata.help){
                const chr=gamedata[idx1][idx2];
                const idx=keyboard.searchindex(chr.toUpperCase());
                if(idx!=null){
                  $('#'+idx).removeClass('keycol');
                  $('#'+idx).addClass('nextkey');
                }
                finger.find(keyboard.klang,chr);
                finger.flashon();
              }
            }else{
              idx2=0;
              idx1++;
              if(idx1<gamedata.length){
                print1line();
              }else{
                idx1=0;
                keydata.step++;
                nexts='score02';
                if(keydata.step<KeyData.steps.length)
                  nexts='score01';
              }
            }
          }else{
            const chr=keydata.charOf(key);
            const idx=keyboard.searchindex(chr);
            if(idx!=null){
              $('#'+idx).removeClass('keydownf');
              $('#'+idx).addClass('keycol');
            }
          }
          break;
  
        case 'scene6':
          nexts='scene3';
          if(key!=32)nexts='';
          break;
        case 'score01':
          if(key==32){
            // if(keydata.step<KeyData.steps.length){
            //   nexts='scene6';
            // }else
            nexts='scene6';
          }else nexts='';
          break;
        case 'score02':
          if(key==32) nexts='scene3_2';
          else nexts='';
          break;
      }
    }
    if(nexts!='')$('#scene').val(nexts).change();
  });

  $('body').on('keydown',function(e){
    const key=e.keyCode;
    if('game'==scene){
      const l=KeyData.steps[keydata.step].substr(1,1);
      const n=KeyData.steps[keydata.step].slice(-1);
      const code=KeyData.keycodes[key];
      const char=code==undefined?null:code.toLowerCase();

      const chr=keydata.charOf(key);
      const idx=keyboard.searchindex(chr);
  
      if(char==gamedata[idx1][idx2]){
        if(idx!=null){
          $('#'+idx).removeClass('nextkey');
          $('#'+idx).addClass('keydownt');
        }
        if(keydata.help){
          finger.flashoff();
        }
      }else{
        if(idx!=null) $('#'+idx).addClass('keydownf');
      }
    }else if('score01'==scene){
    }else if('score02'==scene){
    }

  });

  function top(newpage){
    if(page!=newpage){
      $('#toppage').css('display','block');
      if(page!='')
        $('#'+page).css('display','none');
    }
    page=newpage;
  }
  function main(newpage){
    if(page!=newpage){
      $('#mainpage').css('display','block');
      if(page!='')
        $('#'+page).css('display','none');
    }
    page=newpage;
  }
  function score(newpage){
    if(page!=newpage){
      $('#scorepage').css('display','block');
      if(page!='')
        $('#'+page).css('display','none');
    }
    page=newpage;
  }

  function print1line(){
    const str=gamedata[idx1];
    const input=$('#input');
    input.html('');
    for(let i=0;i<str.length;i++){
      let span=$('<span>',{id:'inp'+i,text:str[i],class:'char'+(i==0?' nextchar':'')});
      input.append(span);
    }
    if(keydata.help){
      const idx=keyboard.searchindex(str[0].toUpperCase());
      if(idx!=null){
        $('#'+idx).removeClass('keycol');
        $('#'+idx).addClass('nextkey');
      }
      finger.find(keyboard.klang,str[0]);
      finger.flashon();
    }
  }
});
