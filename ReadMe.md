** 現在作成中のページです **

# サンプルコードをIE11で動作させる方法
こちらは「[JavaScript コードレシピ集：｜技術評論社](https://gihyo.jp/book/2019/978-4-297-10368-2/support)」サポートページの一部です。

書籍内のサンプルコードを、Internet Explorer 11（以下、IE11）で動作させるための考え方や変換方法について紹介しています。

**注1：IE11向けに動作するためのビルド設定が入っています。通常のサンプルより複雑な構成なので、学習目的としては通常のサンプルファイル（[URLはこちら](https://github.com/ics-creative/js-code-recipe)）をご使用ください**。

注2：変換後のファイルを完全に理解する必要はありません。開発者は新しい仕様を使ってJavaScriptを書き、IE11向けの対応はツールが行うという役割分担です。

## フォルダー構成について

サンプルコードは以下のフォルダー構成になっています。

```
js-code-resipe-ie11
　├ samples：変換対象のサンプルコード
　└ transpiled_samples：IE11で動作するサンプルコード
```

## 本書のサンプルコードをIE11で動作させるための考え方
本書で解説しているサンプルコードは、本書の注意点として、古いブラウザーであるIE11には直接対応していません。IE11はES2015以降に追加された新文法・新機能の多くを利用できないためです。しかし、**新しいJavaScriptを使っていてもIE11で動作可能にするための対策方法があり、フロントエンドの開発では一般的に利用されています**。

変換後のコードはIE11だけではなくモダンブラウザーでも動作するので、IE11対応が必要なプロジェクトに利用するとよいでしょう。


### 新文法の対応：トランスパイル
アロー関数（`() => {}`）や、`for of`文などの新文法は、IE11では動作しません。コードをIE11でも動作するコードに変換して対応します。この変換を「トランスパイル」といいます。トランスパイルするためのツールとして代表的なものは[Babel](https://babeljs.io/)です。

▼ 変換前のコード

```js
// アロー関数を使ったコード
document
  .querySelector('.box')
  .addEventListener('click', () => {
    console.log('クリックされました');
});

// for of文を使ったコード
const array = [1, 2, 3];

for (const value of array) {
  console.log(value);
}
```

▼ 変換後のコード

```js
// アロー関数がIE11で動作するコードに変換された
document
  .querySelector('.box')
  .addEventListener('click', function () {
    console.log('クリックされました');
}); 

// for of文がIE11で動作するコードに変換された
var array = [1, 2, 3];

for (var _i = 0; _i < array.length; _i++) {
  var value = array[_i];
  console.log(value);
}
```

なお、ESモジュールの構文（19章269で解説）については、この方法だけでは不十分です。ESモジュールの対応方法については、後述します。

### 新機能の対応：ポリフィル
`Promise`オブジェクトや`fetch()`メソッドなどの新機能は、IE11には実装されていません。IE11でも動作させるには、不足機能を補うコード「ポリフィル」が必要です。ポリフィルを自分で準備するのは大変ですので、以下のようなものを使います。

- [@babel/polyfill · Babel](https://babeljs.io/docs/en/babel-polyfill)
- [Polyfill\.io](https://polyfill.io)

今回は、手軽に使えるPolyfill.ioを用いた方法を解説します。特徴は次のとおりです。

- HTMLコードで`script`タグを使ってポリフィルを読み込める
- アクセスしたブラウザーに応じたポリフィルを読み込めるため、アクセス環境に応じた適切なポリフィルが読み込まれる


## 本書のサンプルコードをIE11向けに変換する手順
トランスパイルの実行とポリフィルの適用を自動的に行い、サンプルコードをIE11向けに変換するスクリプトを準備しました。とくに面倒な設定は必要なく、数回のコマンドを実行するだけでサンプルコードが変換されます。

### 環境準備

1. コマンドラインツールを起動します。Windowsならば「コマンドプロンプト」、macOSならば「ターミナル.app」です。

2. コマンドで、本フォルダーに移動します。

▼ Windowsでのフォルダーの移動のコマンド

```
cd C:¥Users¥★★★js¥-code-recipe-ie11
```

▼ macOSでのフォルダーの移動のコマンド

```
cd /Users/★★★/js-code-recipe-ie11
```

3. コマンドで、変換に必要なファイルをインストールします。

```
npm install
```

### HTMLコードでポリフィルを読み込む

CDNで公開されているPolyfill.ioのポリフィルを読み込みます。URLは以下のとおりです。

- [https://cdn.polyfill.io/v3/polyfill.js](https://cdn.polyfill.io/v3/polyfill.js)

`?features=機能1,機能2,`と指定することで、必要なポリフィル機能を追加できます。詳細な機能名は[公式サイト](https://polyfill.io/v3/url-builder)を参照いただくとして、今回は下記コードのように読み込みます。配列の新機能、文字列の新機能を含め、サンプルコードで使用している機能のポリフィルがカバーされているので、他のプロジェクトでコピペして使い回すと便利でしょう。

```html
<!DOCTYPE html>
<head>
  <title>サンプル</title>
  <!-- ポリフィルの読み込み -->
  <script src="https://cdn.polyfill.io/v3/polyfill.js?features=default,Document,NodeList.prototype.forEach" defer></script>
  <!-- 新機能を使ったJavaScriptのコード -->
  <script src="main.js" defer></script>
</head>
```

### JavaScriptのコードを変換する

次のコマンドを実行します。

```
npm run build
```

`samples`フォルダー内のJavaScriptが変換されます。変換後のコードはHTMLやCSSファイルとともに`transpiled_samples`フォルダーへ出力されます。

### 変換するファイルを変更したい場合

今回紹介した変換スクリプトは、`package.json`にスクリプト内容が記述されています。次のようなフォルダー構成に対応しています。

- 変換対象フォルダー名：`samples`
- 出力フォルダー名：`transpiled_samples`

`package.json` ファイルの`"config"`の箇所を書き換えます。

```json
"config": {
  "src": "変換フォルダーへのパス",
  "output": "出力フォルダーへのパス"
},
```

## 19章269のコードをIE11向けに変換する方法

設定方法を次のリポジトリにまとめました。

- [19章269のコードをIE11向けに変換する方法](https://github.com/ics-creative/js-code-recipe-ie11-es-module)
