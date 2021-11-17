
//blackJack設計図----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ソフトウェア設計で気をつけることって？----------------------------------------------------------------------------------------------------------------------
//   なるべくわかりやすいUI
//   計算量を少なくしてあげて
//   コードをわかりやすい且つ汎用性の高いものにしていく
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//そもそもクラスって、、なんのためにあるの？ そもそもクラスとは複数のデータ型から構成されているオブジェクトのこと（箱みたいなイメージ）
//どういうデータ構造になっている？------------------------------------------------------------------------------------------------------------------------------------------------
//| constructor()→ コンストラクターを用いることで初期値を設定できる
//| thisとは→保存されているメモリから現在のオブジェクトをひっぱてくるイメージ
//  クラス変数  インスタンスされていない変数のこと（インスタンスとはnew ..()で作った実態のあるオブジェクトのこと）
//| メンバ変数 クラス内で宣言された変数のこと「.」で呼び出すことができる
//| カプセル化 private   publicを使うっぽいそのさいはゲッター、セッターを用いてクラスをデータ操作する感じかな
//参考Url https://qiita.com/azk0305/items/914f6e447b41d4ced25e
//  多態性  オーバーライド、オーバーロードのことを言う。親クラスの内容を子供のクラス内で上書きすること（オーバーライド）まだ先かな？ メソッドの名前は同じでも引数の数が異なっていれば、それぞれ別の処理を定義・実行できる仕組みがオーバーロード
// javascript内の機能にはないくさい,Javaとかにあるらしいがあまりどの場面で使うかピンとこない
//| 静的メソッド(static) なんでつけるん？ インスタンス化したくないときに使う。そのため、thisは使えず、ぐろーばるへんすうのような扱いになるらしい。
//  参考Url https://blog.katsubemakito.net/html5/4beginner-modern-javascript-syntax
//| 普通のメソッドとの違いとは？そもそもメソッドとはクラス内で定義されている関数。ファンクションはいらない
//| 継承ってなんだよ  クラス同士の親子関係みたいなイメージかな。
//   参考Url https://ja.javascript.info/class-inheritance
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//そもそもOOP設計ってなんだよ（オブジェクト指向設計）------------------------------------------------------------------------------------------------------
//もともとJSはOOP（Object-Oriented Programming）には適していない言語だった。しかし、改善により今ではOOPでも設計されるようになったらしい
//  参考URL https://qiita.com/azk0305/items/1e1bd10522927eaddd6a
// 同じものを作りやすい。作業を軽減できる。
//クラス→オブジェクトでインスタンスを一気に作成するイメージ
//  ポリモーフィズム  継承したコードを一部変更することができる処理
//  抽象化  最低限の共通項を見出してそこをオブジェクトで管理する
//「一つのクラスには一つの設計図」
// 3つの原則
//カプセル化（独立性）
//継承（再利用性）
//ポリモーフィズム（拡張性）
//その他気をつける点
//DRY（重複したものは避けよ）
//KISS（シンプルにコードを書くようにする）
//単一責任原則（クラスを変更する理由は単一でなければならない)
//参考URl
//https://products.sint.co.jp/topsic/blog/object-oriented
// https://eng-entrance.com/what-oop
//https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0#%E4%BB%A3%E8%A1%A8%E7%9A%84%E3%81%AA%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E8%A8%80%E8%AA%9E
//
// OOP設計をするメリット、そしてOOP設計をするための考え方とは、、、、
//  オープンクローズドの原則→拡張に対してやりやすく、修正の場合は最小の工程で済むようにする
//  クラスで管理しているため全体を把握しやすい→大きなシステムを構築する際に実装しやすい。
// 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//OOP設計の心がける９つのルール
//1つのメソッドにつきインデントは1段階までにすること
//else句を使用しないこと
//すべてのプリミティブ型と文字列型をラップすること
//1行につきドットは1つまでにすること
//名前を省略しないこと
//すべてのエンティティを小さくすること
//1つのクラスにつきインスタンス変数は2つまでにすること
//ファーストクラスコレクションを使用すること
//Getter, Setter, プロパティを使用しないこと(
  //参考URL https://www.sejuku.net/blog/5973   https://www.sejuku.net/blog/10188  https://www.sejuku.net/blog/9788

//そもそもMVCってなんだよ---------------------------------------------------------------------------------------------------------------------------------
// モデルビューコントローラーの略
//モデル  →システムのデータ、アルゴリズム
//ビュー  →システムの見た目
//コントローラー→２つの間のシステムの橋渡しをする
//  保守性が高い、コードを再利用しやすい、機能を分割できるなどのメリットがあるらしい、、、これを実現するためにはモジュール化（OOPのこと）仕組みはわからないが、OOP設計が現在の主流で動いており、今後も意識したほうがよさそう
//参考URL 　https://www.fenet.jp/infla/column/network/mvc%E3%81%A8%E3%81%AF%EF%BC%9Fmvc%E3%81%AE%E6%A6%82%E5%BF%B5%E3%82%84%E5%BD%B9%E5%89%B23%E3%81%A4%E3%81%A8%E5%85%B7%E4%BD%93%E4%BE%8B%E3%82%92%E7%B4%B9%E4%BB%8B%EF%BD%9C%E3%83%A1%E3%83%AA%E3%83%83/#:~:text=MVC%E3%81%A8%E3%81%AFWeb%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0,%E3%81%A4%E3%81%AB%E6%95%B0%E3%81%88%E3%82%89%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82
//--------------------------------------------------------------------------------------------------------------------------------------------------------

//blackjack--------------------------------------------------------------

// カードに関して------------------------------------------------------------------------------------
// |カードがハート、スペード、クラブ、ダイアモンドの４種類で５２枚のトランプを使用する.               |
// |ランクが存在し、,A,2,3,4,5,6,7,8,10,J,Q,Kとなる。                                                 |
// |--------------------------------------------------------------------------------------------------

//  ブラックジャックの流れgamePhaseで管理する(betting,acting,)ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー-------------------------------------------------|
//  | フェーズ１ bet(掛け金タイム)各々のプレイヤーの掛け金を決定する。→betting                                                                                                       |
//  | フェーズ２ カードを手に入れる（ディーラーがカードを各々のプレイヤーにカードを二枚ずつ渡して、ディーラーのみ自分のカードを一枚わかるようにしていなければならない）→acting     |
//  | フェーズ３ //各々のプレイヤーが手札を表向きにして見る。その後、手札を変えるアクションを選択する。その際にディーラーのカードを一枚わかるようにしておく。                |
//  | フェーズ４//結果判定をする。２１に近かったものが勝利。掛け金の操作をして再度フェーズ１へ。自分の所持金がなくなった時点でゲーム終了。                                   |
//  | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------|


//フェーズ３の種類-------------------------------------------------------------------------------------------------------------------------|
//| サレンダー 配れた二枚の時点で負けを認め、掛け金の半分を返してもらうアクション→surrnder                                                |
//| スタンド 手元にあるカードで勝負すること→stand                                                                                         |
//| ヒット カードを一枚追加すること（２１以上になった時点で負け）→hit                                                                     |
//| ダブル 掛け金を二倍するかつ、手札をもう一枚追加する処理.→double                                                                       |
////---------------------------------------------------------------------------------------------------------------------------------------|

// |--------プレイヤーの行動順序---------------------------------------------------------------------------------------------------------|
// | // プレイヤーの状態やアクションを表す文字列。(gameprocessで管理){"betting", "bet", "surrender", "stand", "hit", "double", "blackjack", "bust", "broke"}
// |  のいずれかとなる                         
// | betting 掛け金設定前
// | bet 掛け金設定後
// | surreder 負けを認めお金を回収ターン
// | stand  勝負
// | hit  もう一枚引く処理
// | double 掛け金を二倍にしてもう一枚引く状態
// | blackjack 手札がブラック・ジャック
// | bust 21以上になりまけ
// | broke  所持金がなくなり負け
//これらの状態を管理しているおかげでどこのターンまで進んだかを追跡できる。
// |-------------------------------------------------------------------------------------------------------------------------------------|


// |-----結果判定に関して----------------------------------------------------------------------------------------------------------------|
// |  21以上になったら即負け。（bust)                                                                                                    | 
// |   バストしていないプレイヤーの手札とディーラーを比較して結果を判定する。数が同じだった場合チップはが失われることはない              |
// |   ただし、ブラックジャックが発生した場合は例外。（プレイヤーのカードが二枚かつ、エース＋「キング、クイーン、ジャック」の場合のこと）|
// | ブラックジャックになった場合はどんな手札にも勝てる |
// |-------------------------------------------------------------------------------------------------------------------------------------|

//その他ルール------------------------------------------------------------------------------------------------------------------
//  自分の所持金がなくなるまでゲームは続行。お金がなくなったPCはステータスをゼロにして、アクションしないようにする。
//  pcのアクションはランダム関数で管理。手札の合計が２１以上だったらスタンド、それ以外だったらランダム関数で条件分岐をして行く。
//  賭けるお金もランダムに設定する。
//  カードはオブジェクトで管理している。
//  delarはカードを一枚しか見れないようにしなくてはならない。どっちもブラックジャックだった場合は引き分けとする。
//  delarの金額は最初からなしにしておく、それ以外のプレイヤーは初期の所持金を４００円とする。
//  
//--------------------------------------------------------------------------------------------------------------------------

// 下記、必要なクラス一覧--------------------------------------------------------------------------------------------------------------------------------------------

// |---------------カードクラス---------------------------------------------------------------------------------------------------------|
// |  必要なデータ                                                                                                                      
// |  marks(ダイアモンド、クロバー、ハート、スペード)、
//    カードのrank（A,１，２，、、、、、、）                                           
// |   必要な挙動                                                                                                                       
// |  ランクからカードが持っている数値を読み取る関数→getRankNumber()                                                                   
// |------------------------------------------------------------------------------------------------------------------------------------|

// |--------- カードデッキクラス---------------------------------------------------------------------------------------------------------|
// |  必要なデータ                                                                                                                       
// |   カード配列(cards)→カードが引かれるたびに枚数が減っていく 
//     gametype,ゲームの種類                                                   
// |  必要な挙動                                                                                                                         
// |  カードの配列をシャッフルする関数  cardshuffle() 
//    carddraw()(カードを一枚引く処理) 
//    resetCard()カードをリセットする処理               
// |-------------------------------------------------------------------------------------------------------------------------------------|

// プレイヤークラス
// |-------------------------------------------------------------------------------------------------------------------------------------|
// |  必要なデータ                                                                                                                       |
// |  名前→name
//    タイプ（プレイヤーorディラーor PCのいずれかになる）→type  pc→かのみさん、TDさん ,まえたつさん ディラー→山崎先生   
//    所持金 →money 初期所持金４００円 defalut引数で設定
// |  手持ちの手札→hand配列
//    掛ける金額→bet     
//    儲けた金額（マイナスの金額）→gameAmount
//    ゲームの状態→gameProcess                                                                                  
// |     必要な挙動                                                                                                                      |
// |    プレイヤー毎にどのようなアクションを取るべきか判断する関数→promptPlayer() 例ｐｃが手もとのトランプが１７以上だったら、、、など
//      またユーザーのゲーム状態も追跡して状態を更新していく必要がある
///     手札のカードの合計を読み取る関数（カードクラスの数値を読み取る関数を使いながら）→gethandscore()
// |-------------------------------------------------------------------------------------------------------------------------------------|


// |------- 結果判定クラス---------------------------------------------------------------------------------------------------------------|
// | // 必要なデータ                                                                                                                     |
// |   現在のアクション(action)と掛け金(amount)
// |  //必要な挙動 |
// |  なし
// |-------------------------------------------------------------------------------------------------------------------------------------|

// テーブルクラス------------------------------------------------------------------------------------------------------------------------|
// | 必要なデータ                                                                                                                        | 
// | 掛け金選択肢(betselection)                                                                                                          |
//   ゲームの種類(gametype)
//   カードデッキ(deck)→カードデッキでインスタンスを作成する
//  ディーラー(dealer) →山崎先生をプレイヤークラスで作成
//  プレイヤークラス他の三人のインスタンスも作成する →配列 players に入れておく
//  ゲームのフェーズ (gamePahse)
//  ラウンドごとの記録配列(record)
//  ターンカウンター(ターンを足していき、追跡する。カウントで最初のプレイヤー、最後のプレイヤーか判断するために使う)(turnconter)
//
//
// | 必要な挙動                                                                                                                          |
//  bet終了後、カードを二枚配る関数→blackjackAssign....() →ベッド終了後に配列にカードを入れ込む。ディーラーを条件分岐して二枚目は隠す
//  ラウンドの最初に掛け金、手札をゼロにする関数→blackjackClear...()→各ラウンドの最初に掛け金等手札をゼロにする関数。isFristPlayer()と連携して実行する
// プレイヤーのベッドと手札、ゲームプロセス、所持金の状態を更新する→evaluate()→ハブターンから情報を受取、プレイヤーの状態を更新していく
//  現在のプレイヤーのかえす関数→getTurnPlayer()→evaluate()関数と連携して現在フォーカスしているプレイヤーの手札やお金、別途した金額の更新をして行くのに役立つ
//  最初のプレイヤーかどうか判定する関数→isFirsPlayer()→ラウンドが最初になるということはテーブルの金額やカードをリセットしなければならない。その際の条件分岐をするためにブーリアン値で結果をかえす
//  最後のプレイヤーかどうか判定する関数→isLastPlayer()→ラウンドごとの記録をする関数をいつ発生させるかでブーリアン値で条件分岐する
//  actingが終わるフェーズを判定する関数→isAllPlayerActionResolved()→ディーラー、ｐｃがずっとhitし続ける可能性があるのですべてのプレーヤーのactingがいつ終わるのかを判定する
//  最後のプレイヤーだった場合、結果を配列に記録しそれをリターンする関数→blackjack..result()
//   ブラック・ジャックかどうか判定する関数→isBlackJack()→勝敗判定に利用するため必要
//   各ターン毎にゲームのフェーズを更新していく関数→haveturn()→promptPlayer、evaluate()、turncount,gamephaseすべてを更新して行く関数
// |-------------------------------------------------------------------------------------------------------------------------------------|

//そもそもレンダリングとは,,ってなんぞや-----------------------------------------------------------------------------------------------
// 目的 webpageの高速化 レンダリングとは  文字や画像（何らかのデータを読み込んで）を処理してWebページに表示する処理                   |
// レンダリングの流れ1 Loading 2 Scripting 3 Rendering 4 Painting
// Loading→HTMLファイルをDOMとしてに変換する
// Scripting →(JSにて実行) 字句解析→構文解析 jsエンジン内で機械語に翻訳しCPUに渡す処理
// Rendering →（レイアウトツリーの構築)nodeの木を構築している→分岐しているイメージ                                                 |
// Painting → (計算結果の描画)
// 参考URL
//https://zenn.dev/eitches/articles/2021-0225-web-rendering-structure
//------------------------------------------------------------------------------------------------------------------------------------

//defalut引数---------------------------------------------------------------------
//そのままの通り初期設定された引数のこと
//参考Url
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters
//------------------------------------------------------------------------------


// |-------// レンダリングクラス--------------------------------------------------------------------------------------------------------|
// | 必要なデータ なし！                                                                                                                |
// | 必要な挙動                                                                                                                         |
// | initialRender() 最初のページをレンダリングする静的メソッド         
//   名前を受け取り、その情報をもとにプレイヤーを作成し、配列に入れる。その後テーブルをレンダリングする                                                        
// |  renderTable() Tableのページをレンダリングする                
//  userが処理中のときはアクションする内容によって条件分岐する必要がある。（userの状態acting,hitだった場合→アクションページをレンダリング
//   ラウンド終了後であれば結果ページをレンダリング（合わせてrenderresultinfo()も実施）
//   betting状態であれば、テーブルはそのままにしておく  
// |  renderBtn()   Btnをレンダリングする                     
//  賭ける金額ボタンを設定する際のボタンを作成する関数。レンダーテーブルの際に連携して使用する
//    クリックしたら合計金額を計算する関数が必要になってくる(calucatebet())
//     
// |  ActionPage()   4つのアクションを表示する関数        
//  userの状態がベッティングからアクションに変わった場合、ページ遷移する。レンダーテーブルの際に条件分岐して使用する
//  プレイヤー情報とカードをfor文で回して実装させる                                    
// |  renderCard()    cardページをレンダリングする             
//  //カードをレンダリングする関数。アクションページをレンダリングする際に使用する。
//   ルール上カードはベッティグしている際は見れないので隠しておくようにレンダリングしておく                                                   
// |renderPlayInfo()   プレイヤー情報をレンダリングする関数    
//  プレイヤー情報をレンダリングする                                             
// |rendertDealerInfo() 山崎先生情報をレンダリングする情報 
//   山崎先生ディーラーの情報をレンダリングする。     ルール上ヤマザキ先生の手札は一枚しか見れないので条件分岐をしておく。                                                                     
// | renderResultInfo() 結果をレンダリングする関数  
//  結果ーをレンダリングする。もし自分のステータスがbrokenだったら新しいゲームを始めるボタンが出るように条件分岐をしておく必要がある。
//                                                                                    
// |-------------------------------------------------------------------------------------------------------------------------------------|

// こっからコード始まります！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！

// カードクラス-------------------------------------------------------------------------------------------------
class Card { 
  //コンストラクタ----------
  constructor(mark, rank) {//記号と番号を引数に入れる。
    this.mark = mark;//ハート、ダイアモンド、クラブ、スペード
    this.rank = rank;//A,2,3,4,5,6,7,8,9,10,J,Q,,K
  }
  // ___________カードのランク（キー）を入れて数字をリターンする関数
  getRankNumber() {
    const cardRank = {//カードの番号と数字ランクを結びつけてオブジェクトで管理する
      "A":11,
      "2":2,
      "3":3,
      "4":4,
      "5":5,
      "6":6,
      "7":7,
      "8":8,
      "9":9,
      "10":10,
      "J":10,
      "Q":10,
      "K":10
    };
    return cardRank[this.rank];//数字ランクをリターンする
  }
}

// カードデッキクラスーーーーーーーーーーーーーーーーー５２枚のカードを用意してシャッフルしていくーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
class CardDeck {
  //コンストラクター-----------------------------//
      constructor(gametype) {
        this.gametype = gametype;//gametype
        this.cards    = [];//カード配列（初期化しているので現時点では空）

        const marks = ["Heart", "Diamond", "Clover", "Spade"];//ハート、ダイアモンド、クローバー、スペード配列
        const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];//カードのランク配列

        for (let i = 0;i < marks.length; i++) {//marksの数だけ繰り返し処理
          for (let j = 0; j < ranks.length; j++) {//ranksの数だけ繰り返し処理
            this.cards.push(new Card(marks[i], ranks[j]));//カードクラスをもとにインスタンスを作成し、for構文を２回繰り返しして空の配列であるcardにpushしていく
          }
        }
        this.shuffleCard();//配列をシャッフルする処理
      }

      //山札をシャッフルする関数---------------------------------------------------------------------
      shuffleCard () {//５２枚のカードをシャッフルする。①順番通りの要素を一旦変数に入れて上げる②ランダムな数字で引っ張った要素にそれを更新してあげる③ただ、もともとの順番通りにゲットした要素ここで言う（tempcard)もデッキに入れなくてはいけないので、（変数に入れて保存済み）numxの要素として更新してあげる。→これをひたすら繰り返ししていく。
        for (let i = 0; i < this.cards.length; i++) {//cards配列の要素数だけ繰り返し処理
          let numX         = Math.floor(Math.random() * 51);//Math.random()関数を使って５１までの数字を出力して変数に入れる
          let tempCard     = this.cards[i];//tempCard変数にcards配列のi番目要素を入れてあげる
          this.cards[i]    = this.cards[numX];//その後、cards配列のi番目要素を先程のnumX番目（ランダムな数）で更新してあげる。
          this.cards[numX] = tempCard;//numX番目の要素は前述に変数で保存しておいたtempcardを入れてあげて更新してあげることでシャッフルできるはず
        }
      }
//カードをリセットする関数-----------------
      resetCard () {

        
        const marks = ["Heart", "Diamond", "Clover", "Spade"];//ハート、ダイアモンド、クローバー、スペード配列
        const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];//カードのランク配列
        this.cards = [];//カード配列（初期化しているので現時点では空）
        
        for (let i = 0; i < marks.length; i++) {//marksの数だけ繰り返し処理
          for (let j = 0; j < ranks.length; j++) {//ranksの数だけ繰り返し処理
            this.cards.push(new Card(marks[i], ranks[j]));//カードクラスをもとにインスタンスを作成し、for構文を２回繰り返しして空の配列であるcardにpushしていく
          }
        }
        this.shuffleCard();
      }

      //一枚目をドローする関数
      drawCard () {
        const card = this.cards[0];//最初の要素をゲットしていく
        this.cards.shift();//最初の要素を抜く。
        return card;//前述の最初のカードをリターンする
      }
}
//---------------------------------------カードクラスここまで----------------------------------------------------------------------------------------


// プレイヤークラス---------------------------------------------------------------------------------------------------------------------------------------------------------------
class Player {
  //コンストラクターー-----------------------------------------------
  constructor(name, type, gametype, money = 400) {//引数に名前とタイプ、所持金をデフォルト引数で設定
    this.name        = name;//お名前
    this.type        = type;//playerかｐｃ,dealerか判断する（ｐｃ自動対戦にしたいから）
    this.gametype    = gametype;//ゲームタイプ
    this.money       = money;//所持金マネー
    this.hand        = [];//プレイヤーが持っている手札
    this.gameAmount  = 0;//ゲームの結果で買った金額、負けた金額。
    this.bet         = 0;//賭けたお金の量
    this.gameProcess = "betting";//ゲームの状態を管理して条件分岐することによって、ゲームのアクションが違ってくるため、コンスタラクターに入れておく。最初の状態はbet（かけますよ状態） アクションとしては「bet,acting,hit」の三種類
  }

  //--------------プレイヤーがどう動くか判断する関数。-------------------------------------------------------------------------------------------------------------------
  promoterUser(userData) {
      let betMoney   = 0;//かけた金額を変数に入れる。最初はゼロ
      let userAction = this.gameProcess;//プライヤーのアクションを変数に入れる。（条件分岐するため）
      console.log(userAction)
      //ｐｃの場合のアクション-------------------------------------
      if(this.type === "pc") {
        //どのゲームの過程にいるかで条件分岐する必要がある。---------------------
        
        if(this.gameProcess === "betting") {//bettingの場合--------------------------------------------------------
          const number = Math.floor(this.money / 5);//所持金を５で割ってそれを定数に入れる
                userAction = "bet";//アクションをbetに更新しておく
                if (this.money <= 5) {//所持金がゼロだった場合は全財産をなげうってベットマネーに入れる。
                  betMoney = this.money;//５をベットする
                } else {//
                  betMoney = (Math.floor(Math.random() * number) + 1) * 5;//それ以外でもあればランダムに対応してほしいので、ランダム関数を設定
                }

          } else if (this.gameProcess === "acting") {//actingの場合----------------------------------------------

            if (this.getHandScore() === 21) {//21だった場合勝てるから
              userAction = "stand";//standする
            } else {//それ以外であれば
              const choices   = ["surrender", "stand", "hit", "double"];//surrender,stand,hit,doubleを配列に入れておく
              const randomNum = Math.floor(Math.random() * 4);//4をランダムにして数字を入れてあげる
              const choice    = choices[randomNum];//choice[index]番目を入れて定数に入れる
                 userAction   = choice;//userAction負ける
            }

          } else if (this.gameProcess === "hit") {//hitの場合-------------------------------------------

            const choices   = ["surrender", "stand", "hit"];//配列に入れておく
            const randomNum = Math.floor(Math.random() * 3);//3をランダムにして数字を入れてあげる
            const choice    = choices[randomNum];//randoNumでアクションを定数に入れて上げる
            
            userAction = choice;//userActionを入れる
          } else {
            userAction = "broken";//userActionをbrokenに更新していく
          }
      } else if (this.type === "dealer") {//typeがディーラーの場合の処理------------------------------------------------
         betMoney = -1;//お金は関係ないので仮に−１を入れてあげる
         
        if (this.gameProcess === "betting") {//bettingかどうか判断しながら処理する------------------------------------
          userAction = "bet";//betだけかえす

        } else {//------それ以外だったら------------------------
          if (this.getHandScore() < 17) {//17より以下だったら
            userAction = "hit";//hitする
          } else {
            userAction = "stand";//それ以上だったらstandを更新していく
          }
        }
      } else {//playerの場合---------------------------------------

        if (this.gameProcess === "betting") {//bettingの場合------------------------------------------------------------
          userAction = "bet";//betに更新していく
          betMoney = userData;//ベットお金をデータに入れてあげえる
        } else {//それ以外だったら--------------------------------
          userAction = userData;//userActionデータに入れてあげる
        }
      }

      let GR = new GameResult(userAction, betMoney);//引数にuserAciton,かけたお金を引数に入れて、そのインスタンスを変数に保存する
      return GR;//その変数に出力する
  }

    //手元にあるカードの合計を算出する関数--------------------------------------------------------------------------
  getHandScore () {
    let score = 0;//初期値を０にして変数に入れる
    for (let i = 0; i < this.hand.length; i++) {//手札にあるカード配列であるcardの数だけ繰り返し処理
      score += this.hand[i].getRankNumber();//ひとつずつカードクラスで作った関数でランクから数を読み取りスコアに足していく
      if (score > 21 && this.hand[i].rank === "A") {//21より小さい場合かつ手元にAがあった場合は
        score -= 10;//Aを１だと判定して合計結果を出す。
      }
    }
    return score;//点数を出力する
  }
}
//--------------------------------------------プレイヤークラスここまで----------------------------------------------------------------------------------------


//ゲーム結果クラス--------------------------------------------------------------------------------------------------
class GameResult {
  //------------コンストラクター------------------------------------------------------------------------------------
  constructor(action, amount) {//引数に現在のアクション（bet,actiong等）と、かけたお金をデータとして持っておく。
      this.action = action;//プレイヤーが行うアクション
      this.amount = amount;//プレイヤーが選択した量
  }
}
//---------------ゲーム結果クラスはここまで-------------------------------------------------------------------------------------------


//tableクラス始まり-----------------------------------------------------------------------------------------------
class Table {
        //コンストラクター----------------------------------------------------------------------
        constructor(gametype, betSelections = [5,20,50,100]) {//引数に所持金をベットする際に必要な選択肢をデフォルト引数として設定
            this.gametype      = gametype;//ゲームタイプ
            this.betSelections = betSelections;//betする際の選択肢

            this.deck    = new CardDeck(this.gametype);// カードデッキインスタンスを作成

            this.players = [];//players配列を設定。最初は誰もいないので空に設定しておく

            this.dealer  = new Player('山崎先生', 'dealer', this.gametype);//ヤマザキ先生はディーラーとして設定しインスタンスを作成する
            const PC1    = new Player('かのみさん', "pc", "blackjack")//playerクラスでインスタンスを作成する
            const PC2    = new Player('TDさん', 'pc', "blackjack");//playerクラスでインスタンスを作成する
            const PC3    = new Player('まえたつさん', "pc", "blackjack");//playerクラスでインスタンスを作成する
            
            this.players.push(PC1, PC2, PC3, this.dealer);//players配列にすべてのplayerを入れておく。

            this.gamePhase    = "betting";//現在のフェーズを追跡して条件分岐させたいので設定しておく。最初のフェーズは掛け金を設定するbettingである。
            this.resultRecord = [];//ラウンドごとの山崎先生以外のプレイヤーの状態を配列で記録しておく
            this.turnCounter  = 0;//ターンのカウントを持っておく。カウント数を追っていくことで現在のプレイヤーがわかるようになるはず
        }

//----------現在のプレイヤーデータをpromotplayerからGameResultを受け取り、それに応じて、playerの状態を更新する.--------------------------------------
  evaluateMove (Player, userData) { //Player,userdataを引数に入れる
    const GR = Player.promoterUser(userData);///Playerクラス内にあるpromptPlayerの結果を定数に入れてあげる
    const betAmount = GR.amount;//定数にベットしたお金を入れてあげる
    const action    = GR.action;///userActionを入れてあげる
    console.log(betAmount);
    console.log(action);
    console.log(GR);

    if(action === "bet") {//betの時であれば
      Player.gameProcess = "acting";//actingに状態を更新してあげる
      Player.bet         = betAmount;//賭けた金額を更新しておく

    } else if (action === "surrender") {//負けを認めたスレンダーである場合
      Player.gameProcess = "surrender";//スレンダーに更新しておく
      
    } else if (action === "hit") {//actionがヒットであった場合
      Player.gameProcess = "hit";//gameProcessがヒットで会った場合は
      Player.hand.push(this.deck.drawCard());//Playerの手札配列に打ち込む
      if (Player.getHandScore() > 21) {//もし自分が２１以上であった場合は
        Player.gameProcess = "bust";//状態をバストにする
      }
    } else if (action === "double") {//actionがダブル出会った場合は
      Player.bet = Player.bet * 2;//賭けた金額を２倍にしてあげる
      Player.hand.push(this.deck.drawCard());//カードを引いて手札に足す。
      if (Player.getHandScore() > 21) {//21以上PlayerHandScore()が２１以上だった場合は
          Player.gameProcess = "doublebust";//状態をダブルダストにする
      } else {
          Player.gameProcess = "doublestand";//ダブルスタンドに状態を変更しておく
      }

    } else if (action === "stand") {//actionをスタンドに変更しておく
      Player.gameProcess = "stand";//standにPlayerの状態を更新しておく
      if (Player.getHandScore() > 21) {//21以上だった場合は
        Player.gameProcess = "bust";//バストに更新しておく
      }
    } else {
      console.log('そのアクションは取れません' + action);
    }
    console.log(Player.name + Player.gameProcess + action)
  }

//-----------turnCounterと--現在の処理をしているプレイヤーをかえす関数--------------------------------------
   getTurnPlayer () {
    const playerNum   = this.players.length;//プレイヤーの人数をレングスでゲットして定数に入れる
    const playerIndex = this.turnCounter % playerNum;//それをターンのカウントで割る（ターンカウントで追跡しているから大丈夫）

    return this.players[playerIndex];//配列[index]をゲットして取得
   }
    
//-----------------------------各ターンのPhaseを更新していく関数----gemaPhaseでいまどこの状態家確認しつつ行う。また、getTurnPlayer関数によって現在のプレイヤー情報を受取、PlayerクラスのpromoterUser関数を発動させて次のアクションを決定させる。次に、アクション後の結果更新のためにevaluateMove関数を実施させる。またターンカウンターをコンストラクター内で管理しているのでそれも更新しておく。---------------------------------------
   haveTurn (userdata) {

      const player    = this.getTurnPlayer();//現在のプレイヤーをゲットして定数に入れる。
      const gamePhase = this.gamePhase;//現在のゲームのフェーズ
     console.log(player)
     console.log(gamePhase)
//ゲームの段階で条件分岐をする（betting,acting,evaluateWinner)----------------------------------------
      if (gamePhase === "betting") {//gamePhaseがbettinｇだった場合
        if (this.isFirstPlayer()) {//もし最初のプレーヤーだったら
          this.blackjackClearPlayerHandsAndBets();//１ラウンド終了後、テーブルのカードをリセットして、ベット舌お金もゼロにしてくれる関数を行う。
        }
        
        this.evaluateMove(player, userdata);//playerとuserdataを引数に入れて
        if (this.isLastPlayer()) {//もし最後のプレーヤーだったら
          this.blackjackAssignPlayerHands();////ベット作業終了後に、playerに各々二枚カードを渡す関数を実行してあげる
          this.gamePhase = "acting";//gameの段階をつぎのactingにすすめる
        }

      } else if (gamePhase === "acting") {
        if (player.gameProcess === "acting" || player.gameProcess === "hit") {
          //gamePhaseがactingかhitだった場合
            this.evaluateMove(player, userdata);//player,userdataを引数に入れて、
        }
        if (this.isAllPlayerActionResolved()) 
          this.gamePhase = "evaluateWinner";//すべてのプレイヤーがgamePhaseを更新する。
        
      } else if (gamePhase === "evaluateWinner") {//gamePhaseがevaluateWinnerだったら
        this.resultRecord.push(this.blackjackEvaluateAndGetRoundResults());//ディーラー以外の記録を配列として持っていたいため、ラウンドごとの勝敗を判断してくれる関数を実施し、それが終わった後のリターンを配列に入れてあげる。
        this.gamePhase = "roundOver";//gamePhaseをroundOverに更新させてあげて
      } else {
        alert("ハブターン");//アラート
      }
      this.turnCounter++;//ターンのカウントを足していき追跡していく。（最初のプレイヤー、最後のプレイヤーかどうかで条件分岐を実行したいため）
   }

   //------------------------------ベット作業が終了後カードデッキから各々のプレイヤーに二枚ずつ渡す（プレイヤーのhands配列にぶち入れる）ブラックジャックのルール上ディーラーにカードの二枚目を見せてはいけない--------------------------------
   blackjackAssignPlayerHands () {
     for (let i = 0; i < this.players.length; i++) {//playersの数だけ繰り返し処理。
       if (this.players[i].gameProcess === "broken") {//もしゲーム状態がbrokenの場合
         this.players[i].hand.push(new Card("G's", "G's"), new Card("G's", "G's"));//プレイヤーの配列手札にG'sトランプを入れる。
       } else {//もしそれ以外だったら、
         this.players[i].hand.push(this.deck.drawCard(), this.deck.drawCard());//カードをドローする処理を行う。
       }
     }
   }
//-------------------１ラウンド終了後、テーブルのカードをすべてリセットし、ベットしたお金もゼロにする（playerクラスの手札配列cardをからの配列にしてあげる)その後、プレイヤーのゲームステータスをベットの状態にしてあげる------------------------
   blackjackClearPlayerHandsAndBets () {
      for (let i = 0; i < this.players.length; i++) {//playerの人数文だけ繰り返し処理
        this.players[i].bet        = 0;//賭けたお金をゼロとする
        this.players[i].hand       = [];//手持ちのトランプも空にする
        this.players[i].gameAmount = 0;//儲けた、もしくは負けたお金をゼロにする。

        if (this.players[i].gameProcess !== "broken") {//gameProcessがbrokenではない場合
          this.players[i].gameProcess = "betting";//bettingに更新しておく。
        }
      }
   }
//---------------------------------------------すべてのプレイヤーのアクションが終わった且つ、プレイヤーが最後の配列である場合に返される。--------------------------
   blackjackEvaluateAndGetRoundResults () {
     let record = [];//記録を入れるデータ入れるための変数（から配列を設定）
    for (let i = 0; i < this.players.length-1; i++) {//プレイヤー数の数だけ繰り返し処理

      const player = this.players[i];//一人ずつ回して行く
      const dealer = this.dealer;//ディーラー山崎先生
      const score  = player.getHandScore();//そもそも、playeｒはplayerクラスの情報を持っているのでハンドスコア関数をしていく

      if (player.gameProcess === "bust" || player.gameProcess === "doublebust") {//プレイヤー状態で条件分岐をしていく。gameprocess をbustもしくはダブルブストだった場合
        player.gameAmount = player.bet * -1;//負けた金額をゲームアマウント変数に入れておく。

      } else if (player.gameProcess === "surrender") {//プレイヤーがスレンダーの状態だった場合、
        player.gameAmount = Math.floor(player.bet / 2) * -1;//player.gameAmount/２してゲームアマウントを更新していく。

      } else if (player.gameProcess === "stand" || player.gameProcess === "doublestand") {///プレイヤーがそもそもstandもしくはダブルスタンドの状態だった場合
        if (this.dealer.gameProcess === "bust") {//bustのあった場合は（２１以上になってdelearが自爆した場合）
            player.gameAmount = player.bet;//儲かった金額をベットした金額にする

        } else if (this.isBlackjack(dealer.hand) && this.isBlackjack(player.hand)) {//dealerとplayerどちらもブラック・ジャックの場合は引き分けになる。
          player.gameAmount = 0;//儲かりもせずマイナスにもならず
          player.gameProcess = "blackjack";//game状態をブラック・ジャックに更新しておく

        } else if (this.isBlackjack(player.hand)) {//買った場合
          player.gameAmount = Math.floor(player.bet * 1.5);//賭けた金額の1.5 倍が手もとに入る
          player.gameProcess = "blackjack";//game状態をblackjackに更新しておく

        } else if (score > dealer.getHandScore()){//自分のスコアの方が良かった場合
            player.gameAmount = player.bet;//bet金額がplayerのベットしたお金は戻ってくる

        } else if (score < dealer.getHandScore()) {//dealerが買った場合は
          player.gameAmount = player.bet * -1;//betしたお金は戻ってこない

        } else if (score === dealer.getHandScore()) {//引き分けの場合は
          player.gameAmount = 0;//０

        } else {//
        alert("エラー");//
      }
    }
      console.log(player.gameAmount);
      player.money += player.gameAmount;//儲かったお金を自らの所持金に入れておく。
      record.push("名前:" + player.name + ", アクション:" + player.gameProcess + ", 賭け金:" + player.bet + ", 勝ったお金:" + player.gameAmount + ", 所持金:" + player.money);//選手の名前と、アクション、賭けた金額、儲かった金額を配列としてプッシュしておく
      if (player.money <= 0) {//もしお金がゼロになったら
        player.gameProcess = "broken"//broken状態にしておく
      }
    }
    return record;//記録をリターンする
   }

//-------------------------最後のプレイヤーかどうかをブーリアン値でかえす関数-----------------------------------------------
   isLastPlayer () {
    const playerNum   = this.players.length;//プレイヤーの数をレングスでゲットして
    const playerIndex = this.turnCounter % playerNum;//ターンのカウントで割り
     if (playerIndex === playerNum - 1) return true;
     else return false;
     //playerNumと一つしか変わらなかったら（indexは０から始まるため）true,違う場合はfalse;
   }
//---------------------------最初のプレイヤーかどうかをブーリアン値でかえす関数--
   isFirstPlayer () {
    const playerNum   = this.players.length;//レングスで人数を取得して定数に入れる
    const playerIndex = this.turnCounter % playerNum;//ターンカウントで割りあまりを出す
     if (playerIndex === 0) return true;
     else return false; //trueかfalseでかえってくる（０ということは最初のプレーヤということだから）
   }
//----------------------------------すべてのプレイヤーがbroken,bust,stand,surrenderのステータスを持っていればtrueをかえす---------------
   isAllPlayerActionResolved () {
     let isResolved = true;//初期値をtrueとして変数に入れる
     console.log(this.players.length)
     for (let i = 0; i < this.players.length; i++) {//playerの数だけ繰り返し処理
       let gameStatus = this.players[i].gameProcess;//gameStatus変数にゲームの状態を入れていく。
       
       console.log(this.players[i]);
       console.log(gameStatus);
       if (!(gameStatus === "surrender" || gameStatus === "bust" || gameStatus === "broken" || gameStatus === "stand" || gameStatus === "doublebust" || gameStatus === "doublestand")) {//gameStatusがこのどれかであればfalseにする
        console.log(isResolved)
        isResolved = false;
       } 
       
      }
      return isResolved;
   };
//---------------------ブラック・ジャックのカードかどうかをブーリアン値でかえす関数------------------------------------------------------
   isBlackjack (cards) {
    let isCardBJ = false;//ブラックジャックかどうかを判定する。
    let picCards  = ["J","Q","K"];//絵柄があるカード配列
    if(cards[0].rank === "A" && picCards.includes(cards[1].rank)) {
      isCardBJ = true;//カードのランクがAであるかつ、絵柄のカードのいずれかを持っている場合（配列をincludes()で判定してあげる）→変数isBJをtrueにしてあげる
    } else if (cards[1].rank === "A" && picCards.includes(cards[0].rank)) {
      isCardBJ = true;
    }
     return isCardBJ;
   }
}
//---ここまで------------------------------------------------------------------------------------------------------


//-----レンダリングクラス---------------------------------------------------------------------------------------------

class Rendering {

//下記レンダリングに関わるメソッド一覧。-----------------------------

//tableを初期化しつつrenderTableを実行する---------------
  static initializeGame () {
    
    const gameDiv = document.getElementById("gameDiv");//gameDivをゲットする
      gameDiv.innerHTML = `
        <div  class="bg-green d-flex justify-content-center align-items-center vh-100">
    <!-- login form div -->
    <div>
        <p class="text-white font-weight text-dark" > ようこそ！！ 大人の遊び場へ！！ </p>
        <!-- name field div -->
        <div>
            <input type="text" placeholder="なまえ" id ="name">
        </div>
        <!-- game type div -->
        <div class = "my-4">
            <select class="w-100">
                <option value="blackjack">G'sジャック </option>

            </select>
        </div>
        <!-- submit div -->
        <div>
            <a  class="btn btn-info text-dark font-weight" id ="start" >ゲーム開始！ </a>
        </div>
    </div>
</div>
      `;

      gameDiv.querySelector("#start").addEventListener('click', () => {//startidを取得しつつ、クリックイベント
  
        const name = document.getElementById("name").value;//入力された名前の値を受け取る
        
        
        const user = new Player(name, "user", "blackjack");//userとしてプレイヤークラスも用いてインスタンスを生成する
        
        const table = new Table("blackjack");//tableインスタンスを作成する
      
        table.players.unshift(user);//tableのプレイヤー配列たちにuserを先頭に打ち込む
        
        Rendering.renderTable(table);//レンダリングクラスのれんだーテーブル関数をおこないゲーム再開
      });
  }
//テーブル画面をレンダリングするメソッド------------------------------------------
  static renderTable (table) {//テーブル画面をレンダリングする
    const gameDiv = document.getElementById("gameDiv");//divの作成
  
    const currentPlayer = table.getTurnPlayer();//現在のプレイヤーをリターンする関数を実行し、それを定数に入れておく
  
    if (currentPlayer.type === "user" && currentPlayer.gameProcess === "betting") {//現在のプレイヤーがuserだった場合（userだった場合）
      
      gameDiv.innerHTML = ``;//gameDivのhtmlを初期化しつつ

      gameDiv.append(Rendering.renderActionPage(table));//レンダリングクラスのアクションページを実行し結果をアペンドする
      gameDiv.append(Rendering.renderBtn(table));//その後、レンダリングクラスのtableに入れておく。
  

    } else if (currentPlayer.type === "user" && (currentPlayer.gameProcess === "acting" || currentPlayer.gameProcess === "hit")) {//現在のプレイヤーがユーザーであるかつ、acting,もしくはヒット状態であれば
      gameDiv.innerHTML = ``;//初期化しつつ
      gameDiv.append(Rendering.renderActionPage(table));//アクションページを作成しアペンド
      gameDiv.append(Rendering.renderActionBtn(table));//ボタンを作成しアペンド

    } else if (table.gamePhase === "roundOver") {//gamePhaseがラウンドオーバーであれば
      gameDiv.innerHTML = ``;//初期化しつつ
      gameDiv.append(Rendering.renderActionPage(table));//アクションページを作成しアペンド
      gameDiv.append(Rendering.renderResult(table));//結果ページを作成しアペンド
    } else if (table.gamePhase === "betting") {//bettingの状態出会った場合は
      table.haveTurn();//tableクラスのハブターンクラスを実行し
      Rendering.renderTable(table);//レンダリングクラスのレンダーテーブルを実行する
    } else {//万が一エラー担った場合
      setTimeout(function() {
        table.haveTurn();//
        Rendering.renderTable(table);//レンダーテーブルクラスの実行を行っていく
      }, 300);
    }
  }

//掛け金を設定するためのボタンをレンダリングする----------------------------------------------------------------------------------------------------------
  static renderBtn (table) {

    const renderingBtn = document.createElement('div');//divの作成
    renderingBtn.classList.add("d-flex", "pb-5", "pt-4", "justify-content-center");//クラスの作成
    renderingBtn.innerHTML = `
      
        <div id="betsDiv" class="d-flex flex-column w-100">
          <!-- bottom half of bets including chip increments and submit  -->
                <div class="py-2 h-60 d-flex justify-content-between ">
            <!-- betChoiceDiv -->
                    <div>
              <div class="input-group m-1" >
                <span class="input-group-btn">
                  <button type="button" class="btn btn-danger btn-number">
                    -
                                </button>
                </span>
                <input type="text" class="input-number text-center m-2" size="2" maxlength="5" value="0" min="0" max="">
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-success btn-number">
                      +
                                </button>
                  </span>
                        </div><!--end input group div -->
                        <p class="text-white text-center">5</p>
              </div> <!-- end betChoiceDiv -->
                    <!-- betChoiceDiv -->
                    <div>
                <div class="input-group m-1" >
                  <span class="input-group-btn">
                    <button type="button" class="btn btn-danger btn-number">
                      -
                                </button>
                  </span>
                  <input type="text" class="input-number text-center m-2" size="2" maxlength="5" value="0">
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-success btn-number">
                        +
                                </button>
                    </span>
                        </div><!--end input group div -->
                        <p class="text-white text-center">20</p>
                </div> <!-- end betChoiceDiv -->
                    <!-- betChoiceDiv -->
                    <div>
                  <div class="input-group m-1" >
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-danger btn-number">
                        -
                                </button>
                    </span>
                    <input type="text" class="input-number text-center m-2" size="2" maxlength="5" value="0">
                      <span class="input-group-btn">
                        <button type="button" class="btn btn-success btn-number">
                          +
                                </button>
                      </span>
                        </div><!--end input group div -->
                        <p class="text-white text-center">50</p>
                  </div> <!-- end betChoiceDiv -->
                    <!-- betChoiceDiv -->
                    <div>
                    <div class="input-group m-1" >
                      <span class="input-group-btn">
                        <button type="button" class="btn btn-danger btn-number">
                          -
                                </button>
                      </span>
                      <input type="text" class="input-number text-center m-2" size="2" maxlength="5" value="0">
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-success btn-number">
                            +
                                </button>
                        </span>
                        </div><!--end input group div -->
                        <p class="text-white text-center">100</p>
                    </div> <!-- end betChoiceDiv -->
                </div><!-- end bestSelectionDiv -->
               
                <div id="bet-submit" class="w-100 btn-success rem5 text-center bg-info" style="cursor: pointer">
                    この金額で勝負だ！！！
                <div><!-- end betSubmitDiv -->
            </div><!-- end betsDiv--></div>
    `//btnのｈｔｍｌを描画
    const inputNumbers = renderingBtn.querySelectorAll('.input-number');//renderingBtnのインプットナンバー要素をゲットして定数に入れる
    console.log(inputNumbers);//インプットをノードの連結リストとして取得している。
    //ノードリスト  参考URL　https://techacademy.jp/magazine/45055   https://web-begginer-log.com/js_for/#toc8 queryselecterALLで受け取ったnodelistをforeachで回す・
    const deno = table.betSelections;//テーブルクラス内にて設定した選択肢を持ってきて定数に入れる
    const chip = table.players[0].money;//テーブルクラスのプレイヤーの最初のやつ（自分）の所持金を定数に入れてあげる
    // console.log(deno);
    // console.log(chip);
    const caluculateBet = () => {//アロー関数にてベットの金額を計算する。
      let bet = 0;//最初は０
      inputNumbers.forEach((inputNumber, index) => {//引数に引数に入力された値とindexをいれてforEachで回すinputNUmberでインプットのvalue
        bet += inputNumber.value * deno[index];//inpuNumber.value * それぞれのお金で合計金額を出して行く
      });
      return bet;//合計ベットした金額を出力
    }
// console.log(inputNumbers);
    const btnNumbers = renderingBtn.querySelectorAll(".btn-number");//ｂｔｎnumber要素を出力し、定数に入れる
    console.log(btnNumbers);//nodeの連結データ構造でボタンをゲットできる
    btnNumbers.forEach((btnNumber, index) => {//btnNumber,indexでfor文を回す→クリックイベントを付与する
      const denoIndex = Math.floor(index / 2);//indexを２でわって定数に入れる。
      if (index % 2 === 0) {//２で割り切れる場合は
        btnNumber.addEventListener("click", () => {//クリックイベントを発生させる（マイナスボタン）
          if (inputNumbers[denoIndex].value > 0) {//denoIndexのvalueが０より大きい場合は
            inputNumbers[denoIndex].value--;//ｖalueを一つずつ減らしていく
          }
        });
      } else {//それ以外では
        btnNumber.addEventListener("click", () => {//クリックしたら（プラスボタン）
          let bet = caluculateBet();//betの合計金額を計算しつつ
          if (bet < chip) {//自分の所持金と比べてあげる
            inputNumbers[denoIndex].value++;//オーケーだったらvalueを足していく
          }
        });
      }
    });
// console.log(btnNumbers);
    renderingBtn.querySelector("#bet-submit").addEventListener('click', () => {//ベットサブミットボタンをゲットし、クリックしたら
      let bet = caluculateBet();//betした金額の合計金額を計算して挿入する
      if (bet > 0 && bet <= chip) {///0より大きい且つ、chipを多く持っていたらかえるので下記の処理を実行する
        table.haveTurn(caluculateBet());//ベットの合計金額をハブターン引数に入れて実行。
        Rendering.renderTable(table);//テーブルをレンダリングする
      }
    });
    // console.log(renderingBtn);
    return renderingBtn;//レンダリングするｂｔｎが
  }
//４つのアクションがあるのでそれをそれぞれレンダリングする関数
  static renderActionPage (table) {//アクションページ
    
    const actionDiv  = document.createElement('div');//divの作成
    actionDiv.classList.add('pt-5');//クラスの追加
    actionDiv.append(Rendering.renderDealerInfo(table));

    const playersDiv = document.createElement('div');//div能勢区生
    playersDiv.classList.add('d-flex','justify-content-center');//クラスの追加

    for (let i = 0; i < table.players.length - 1; i++) {//プレイヤーの数だけ繰り返し処理
      const playerDiv = document.createElement('div');//divの作成
      playerDiv.classList.add('m-3');//クラスの追加
      playerDiv.append(Rendering.renderPlayerInfo(table.players[i]));//プレイヤーをfor文で一人ひとり取り出しつつ、その情報をレンダープレイヤーに入れる事でレンダリングする
      playerDiv.append(Rendering.renderCard(table.players[i], table.gamePhase));//プレイヤー情報をfor文で一人一人出しつつ、テーブルクラスのゲームフェーズを引数に入れてカードレンダリングシテに行く
      playersDiv.append(playerDiv);//それぞれのdivを打ち込む
    }
    actionDiv.appendChild(playersDiv);//actiondivにplayersDivを打ち込む
    console.log(actionDiv);
    return actionDiv;//アクションdivをリターンする
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  static renderActionBtn(table) {
    
    const actionBtn = document.createElement("div");//divの作成
    actionBtn.classList.add("d-flex", "flex-wrap", "w-70", "justify-content-center");//クラスの作成
    actionBtn.innerHTML = `
            <div class="py-2 m-3">
                <a id="surrender" class="action-btn text-dark btn btn-light px-5 py-1">スレンダー</a>
            </div>
            <div class="py-2 m-3">
                <a id="stand" class="action-btn btn btn-success px-5 py-1">スタンド</a>
            </div>
            <div class="py-2 m-3">
                <a id="hit" class="action-btn btn btn-warning px-5 py-1">ヒット</a>
            </div>
            <div class="py-2 m-3">
                <a id="double" class="action-btn btn btn-danger px-5 py-1">ダブル</a>
            </div>
            `
    const currentPlayer = table.getTurnPlayer();//ターブルクラスから現在のプレイヤーを持ってくる
    actionBtn.querySelector("#surrender").addEventListener("click",  () => {
      table.haveTurn("surrender");//surrender情報を引数に入れて、haveturnを作成します
      Rendering.renderTable(table);//Renderingクラスのレンダーテーブルを作成
    }, { once: true });//一度だけ処理して削除する
    actionBtn.querySelector("#stand").addEventListener("click", () => {//スタンドボタンをクリックしたら
      table.haveTurn("stand");//haveturnにスタンド情報を入れて実行。
      Rendering.renderTable(table);
    }, { once: true })//tableクラスの実行
    actionBtn.querySelector("#hit").addEventListener("click", () => {//ヒットボタンをクリックしたら
      table.haveTurn("hit");//引数にクリックhitをいれて
      Rendering.renderTable(table);//レンダリングクラスのテーブルをレンダリングする
    }, { once: true })//１度だけして削除する
    actionBtn.querySelector("#double").addEventListener("click", () => {//ダブルボタンをおしたら
      table.haveTurn("double");//doubleクラスを作成し、
      Rendering.renderTable(table);//レンダリングクラスでテーブル関数を実施する
    }, { once: true })//１度だけ処理して削除する

    if (currentPlayer.bet * 2 > currentPlayer.money) { //betしたお金の二倍より所持金を持っていいなければ
      actionBtn.querySelector("#double").classList.add("disabled");//actionBtnを使えなくする
    }
    if (table.turnCounter >= table.players.length * 2) {//もし、ターンカウントがプレイヤーの二倍より大きければ
      actionBtn.querySelector("#surrender").classList.add("disabled");//ボタンをつかなくする
      actionBtn.querySelector("#double").classList.add("disabled");//ボタンをつかなくする
    }
    return actionBtn;
  }


//actionPageに対してDivをかえす--------------------------------------------------------------------------------------
  static renderCard (player, gamePhase) {//
    
    const cardDiv = document.createElement('div');//divの作成
    cardDiv.classList.add('d-flex','justify-content-center',"pt-3","pb-5");//クラスの追加

    if (gamePhase === "betting") {//gamePhaseがbettingだったら
      cardDiv.innerHTML += `<div class="bg-white border mx-2">
        <div class="text-center">
          <img src=${cardimg["G's"]} alt="" width="50" height="50">
            </div>
          <div class="text-center">
            <p class="m-0 ">G's</p>
          </div>
        </div>
        <div class="bg-white border mx-2">
          <div class="text-center">
            <img src=${cardimg["G's"]} alt="" width="50" height="50">
            </div>
            <div class="text-center">
              <p class="m-0 ">G's</p>
            </div>
          </div>
            `;
    } else {
      player.hand.forEach((card) => {//プレイヤーのハンド配列に対して、カードを作成する。
        cardDiv.innerHTML += `
          <div class="bg-white border mx-2">
                    <div class="text-center">
                        <img src=${cardimg[card.mark]} alt="" width="50" height="50">
                    </div>
                    <div class="text-center">
                        <p class="m-0 ">${card.rank}</p>
                    </div>
                </div>
        `
      });
    }
    return cardDiv;//リターン
  }

//player情報をレンダリングする関数----------------------------------------------------------------------
  static renderPlayerInfo (player) {//引数にプレイヤーの情報を入れる
   
    const playerInfoDiv = document.createElement('div');//divの作成
    playerInfoDiv.classList.add('text-white','d-flex','flex-column','m-0','p-0');//クラスの追加
    playerInfoDiv.innerHTML = `
      <h3>${player.name}</h3>
                <p class="rem1 text-left">ゲームステータス:${player.gameProcess} </p>
                <p class="rem1 text-left">賭けた金額:${player.bet} </p>
                <p class="rem1 text-left">所持金:${player.money} </p>
    `;//htmlを作成
    return playerInfoDiv;//プレイヤー情報ディブをリターンする
  }
//山崎先生の情報をレンダリングする関数--------------------------------------------------------------------
  static renderDealerInfo (table) {//ヤマザき先生の情報を作成する引数にテーブルクラスを入れている

    const dealer             = table.dealer;//ヤマザキ先生のインスタンスをゲット。
    const dealerInfoDiv      = document.createElement('div');//ディーラー情報divを作成
    const dealerInfoCloseDiv = document.createElement('div');//ディーラー閉じる情報divを作成
    const dealerInfoOpenDiv  = document.createElement('div');//ディーラー開ける情報divを作成

    //gamePhaseのによってディーラーの表示を変えなくてはならない。また、ディーラーのカードを一枚しか見せてはいけないので、条件分岐ができるようにする
    dealerInfoDiv.innerHTML = `
          <p class="m-0 text-center text-white rem3">ディーラー 山崎先生</p>
            <p class="rem1 text-center text-white">ゲームステータス:${(table.gamePhase === "betting" || table.gamePhase === "acting") ? "次のアクションを待っています" : dealer.gameProcess}</p>
    `
    dealerInfoCloseDiv.innerHTML = `
         <div id="houesCardDiv" class="d-flex justify-content-center pt-3 pb-5">
                <div class="bg-white border mx-2">
                    <div class="text-center">
                        <img src=${(dealer.hand[0] === undefined) ? cardimg["G's"] : cardimg[dealer.hand[0].mark]} alt="" width="50" height="50">
                    </div>
                    <div class="text-center">
                        <p class="m-0 ">${(dealer.hand[0] === undefined) ? "G's" : dealer.hand[0].rank}
                        </p>
                    </div>
                </div>
            </div>
    `;//カードを隠した状態のディブ
    dealerInfoOpenDiv.append(Rendering.renderCard(dealer));//ディーラーディブにレンダリングしたカード情報を入れて（二枚とも見れるようなる！）

    if (table.gamePhase === "acting" || table.gamePhase === "betting") {//gamePhaseで条件分岐する
      dealerInfoDiv.append(dealerInfoCloseDiv);//cardが閉じているパターンをアペンドする
    } else {
      dealerInfoDiv.append(dealerInfoOpenDiv)//そうではない場合はディーラーのカードが空いているパターンをアペンドする
    }
    return dealerInfoDiv;//deleardivをリターンする
  }
//結果をレンダリングする関数。
  static renderResult (table) {//引数にテーブルクラス情報を入れる
    const resultDiv = document.createElement('div');//結果divの作成
    resultDiv.classList.add("text-white","d-flex","flex-column","flex-wrap","w-70","justify-content-center","bg-green");//ブートストラップのクラスの追加。

    table.resultRecord.map((roundResult, roundCount) => {//ラウンドごとの結果を記録してある配列→resultRecordにマップ処理をする
      let roundDiv = document.createElement('div');//divの作成
      roundDiv.innerHTML = `ラウンド ${roundCount + 1}:`;//rounddivをroundCountに１たしてｈｔｍｌに描画すでに終わった数だから１を足す
      roundResult.map((playerResult) => {//roundResuｌｔマップ
        let li = document.createElement('li');//li要素の作成
        li.innerHTML = `${playerResult}`;//liのｈｔｍｌを変更する
        roundDiv.append(li);//rounddivにliを追加する
      });
      resultDiv.append(roundDiv);//結果divにラウンドdivを作成する
    });

    let loseBtn = document.createElement('div');//divの作成
    loseBtn.classList.add("flex-wrap","d-flex","w-70","justify-content-center");//クラスの作成

    loseBtn.innerHTML = `
      <div class="py-2">
            <a id="game-over" class="action-btn text-dark btn btn-light px-5 py-1">新しいゲームを始める</a>
        </div>
    `;//負けた際のボタンｈｔｍｌ

    loseBtn.querySelector("#game-over").addEventListener('click', () => {//gameoveridの要素をゲットしつつ、クリックイベントをして
      Rendering.initializeGame();//ゲームを最初から始めるようにする
    });

    let nextBtn = document.createElement('div');//divの作成
    nextBtn.classList.add('d-flex','flex-wrap','w-70','justify-content-center');//クラスの追加
    nextBtn.innerHTML = `
       <div class="py-2 bg-green">
                <a id="next-round" class="action-btn text-dark btn btn-light px-5 py-1">次のラウンドへ</a>
            </div>
    `;//netxBtnのｈｔｍｌを描画する
    nextBtn.querySelector('#next-round').addEventListener('click',() => {//next-roundでクリックイベントを作成する
      table.turnCounter = 0;//ゲームが終わったのでカウントを初期化する
      table.gamePhase   = "betting";//状態＝bettingに戻しておく

      table.deck.resetCard();//deckをリセットしておく
      table.blackjackClearPlayerHandsAndBets();//
      Rendering.renderTable(table);//レンダリングクラスでレンダーテーブルを描写する
    });
    if (table.players[0].gameProcess === "broken") {//仮にプレイヤー情報がbrokenだった場合は
      resultDiv.append(loseBtn);//負けボタンをアペンドして
    } else {
      console.log(table.players[0].gameProcess);
      resultDiv.append(nextBtn);//そうではない場合はネクストボタンをアペンドする
    }
    return resultDiv;//結果divをリターン
  }

}
//----------ここまで----------------------------------------------------------------------------------------------

//カードに使う画像をオブジェクトで管理しておく。
const cardimg = {
  "Heart": "https://3.bp.blogspot.com/-F9ZRBh0N2GY/UNglqMu9SaI/AAAAAAAAJVg/Fxki1Yl0p7A/s200/mark_heart.png",
  "Diamond": "https://3.bp.blogspot.com/-6bXZUTiHPtA/UNglpRwloZI/AAAAAAAAJVY/P96aByQ_dgw/s1600/mark_diamond.png",
  "Clover": "https://3.bp.blogspot.com/-nXwZUaXM89s/UNglogguEYI/AAAAAAAAJVU/wZlly3nrDwg/s1600/mark_clover.png",
  "Spade": "https://1.bp.blogspot.com/--0XNJ-kZv40/UNglrTdfHeI/AAAAAAAAJVo/ZBX5ynkniDw/s200/mark_spade.png",
  "G's": "https://pbs.twimg.com/profile_images/586460110400000004/BSsAcQdw_400x400.png"
}

Rendering.initializeGame();//最初のページを準備だぜ！



       