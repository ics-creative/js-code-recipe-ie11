[![Release Version](https://img.shields.io/github/release/ics-creative/js-code-recipe-ie11.svg)](https://github.com/ics-creative/js-code-recipe-ie11/releases)

# サンプルコードをInternet Explorer 11で動作させる方法

こちらは「[JavaScriptコードレシピ集（技術評論社）](https://gihyo.jp/book/2019/978-4-297-10368-2)」サポートページの一部です。

**⭐ サンプルコードや説明は定期的に更新されています。学習の際は常に最新のものをご利用ください ⭐**

書籍内のサンプルコードを、Internet Explorer 11（以下、IE11）で動作させるための考え方や対応方法について紹介しています。

**注：IE11向けに動作するためのビルド設定が入っています。通常のサンプルより複雑な構成なので、学習目的としては通常のサンプルをご使用ください。**

- [通常のサンプルコード](https://github.com/ics-creative/js-code-recipe)

## ダウンロード
サンプルファイルを一括でダウンロードする場合は次のURLを参照してください。

https://github.com/ics-creative/js-code-recipe-ie11/archive/master.zip

## フォルダー構成
サンプルファイルは次のフォルダー構成になっています。

```
js-code-recipe-ie11
　├ samples：対象のサンプルコード
　└ transpiled_samples：IE11に対応済みのサンプルコード
```
## IE11対応の基本的な考え方

本書で解説しているサンプルコードは、古いブラウザーであるIE11には直接対応していません。IE11はES2015以降に追加された新構文・新機能の多くを利用できないためです。しかし、**新しいJavaScriptを使っていてもIE11で動作可能にするための対策方法があり、フロントエンドの開発では一般的に利用されています**。

対応後のコードはIE11だけではなくモダンブラウザーでも動作するので、IE11対応が必要なプロジェクトに利用するとよいでしょう。

### 新構文の対応：トランスパイル（変換）
アロー関数（`() => {}`）や、`for of`文などの新構文は、IE11では動作しません。**IE11でも動作するES5相当のコードに変換して対応します**。この変換を「トランスパイル」といいます。トランスパイル用ツールとして代表的なものは[Babel](https://babeljs.io/)です。

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

Babelを用いたトランスパイルについてはNode.jsの知識が必要ですが、**今回は面倒な設定をせずに数回のコマンドを実行するだけでトランスパイルを行えるツールを準備しました**（後述）。まずはこのツールを利用して変換の挙動や考え方を学び、必要に応じてBabelの学習を進めるとよいでしょう。

なお、Babelによる変換後のソースコードを完全に理解する必要はありませんし、変換後のコードを手動で変更するのは避けるべきです。開発者は新構文を使ってJavaScriptを書き、構文のIE11向け対応はツールに任せるという役割分担です。

### 新機能の対応：ポリフィル
配列の`includes()`メソッドや`Promise`オブジェクトなどの新機能は、IE11には実装されていません。IE11でも動作させるには、不足機能を補うコード「ポリフィル」が必要です。ポリフィルを自分で準備するのは大変ですので、次を利用するいいでしょう。

- [@babel/polyfill · Babel](https://babeljs.io/docs/en/babel-polyfill)
- [Polyfill\.io](https://polyfill.io)

ポリフィルの適用には、主に次の手段があります。

- ポリフィルをJavaScriptファイル内に書く方法（バンドル）
- `script`タグを使ってポリフィルを読み込む方法

今回は、手軽にポリフィルを扱うため、`script`タグを使ってポリフィルを読み込む方法を紹介します。ポリフィルはネットワーク上に公開されているものを扱うと便利です。このようなコンテンツの公開ネットワークのことを「CDN」と呼びます。

CDNで公開されているポリフィルで便利なものは「[Polyfill\.io](https://polyfill.io)」です。アクセス環境に応じて必要なポリフィルだけが読み込まれる特徴があります。

#### ポリフィルの適用方法

CDNで公開されているPolyfill.ioのポリフィルを読み込みます。URLは次のとおりです。

- [https://cdn.polyfill.io/v3/polyfill.js](https://cdn.polyfill.io/v3/polyfill.js)

`?features=機能1,機能2,`と指定することで、必要なポリフィル機能を追加できます。詳細な機能名は[公式サイト](https://polyfill.io/v3/url-builder)を参照いただくとして、今回は下記コードのように読み込みます。ES2015以降の新機能など多くのポリフィルをカバーした設定なので、コピペして使い回すと便利でしょう。

▼ polyfill.ioのオススメ読み込み設定

```html
<!DOCTYPE html>
<head>
  <title>サンプル</title>
  <!-- ポリフィルの読み込み -->
  <script src="https://cdn.polyfill.io/v3/polyfill.js?features=default,es5,es6,es7,es8,es9,NodeList.prototype.forEach" defer></script>
  <!-- 新機能を使ったJavaScriptのコード -->
  <script src="main.js" defer></script>
</head>
```

## 本書のサンプルコードの対応手順

`transpiled_samples`内にはじめから入っているサンプルは、IE11に対応済みのファイルです。自身でIE11対応を行うときのために、対応手順を紹介します。ポリフィルの適用とBabelによるJavaScriptコード変換を自動的に行うツールを使っています。

### 環境準備

1. コマンドラインツールを起動します。Windowsならば「コマンドプロンプト」、macOSならば「ターミナル.app」です。

2. コマンドで、本フォルダーに移動します。

▼ Windowsでのフォルダーの移動のコマンド

```bash
cd C:¥Users¥★★★¥js-code-recipe-ie11
```

▼ macOSでのフォルダーの移動のコマンド

```bash
cd /Users/★★★/js-code-recipe-ie11
```

3. 次のコマンドで、ツールに依存するファイルをインストールします。

```bash
 npm install
```

### JavaScriptコードの変換とポリフィルの適用

次のコマンドでJavaScriptコードの変換とポリフィルの適用が行われます。

```bash
npm run build
```

各ファイルは`transpiled_samples`フォルダーへ出力されます。

### 対象ファイルを変更したい場合

今回紹介したツールは、`package.json`にスクリプト内容が記述されています。次のようなフォルダー構成に対応しています。

- 対象フォルダー名：`src`
- 出力フォルダー名：`transpiled_samples`

各フォルダーを変更するには、`package.json`ファイルの`"config"`の箇所を書き換えます。

```json
（中略）
"config": {
  "src": "対象フォルダーへのパス",
  "output": "出力フォルダーへのパス"
},
（中略）
```

## ESモジュールを使ったコード（19章269）の対応方法
19章269「処理ごとにファイルを分割したい(ESモジュール)」のサンプルコードはESモジュールを使っており、上記の設定だけでは不十分です。対応方法を次にまとめました。

- [ESモジュールを使ったサンプルコードをInternet Explorer 11で動作させる方法](https://github.com/ics-creative/js-code-recipe-ie11-es-module)

## ローカルで動作しないサンプルについて

次のサンプルはローカルで実行すると動作しません。確認可能なURL（サーバー）がありますのであわせて参照ください。

| 章フォルダー | 項目番号 | 項目名                                      | 確認可能なURL（IE11対応済）                                                                                      |
|:-----------|:--------|:-------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| c12        | 214     | 画像のRGBA値を調べたい                        | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c12/214/index.html) |
| c12        | 215     | キャンバスの画像を加工したい                    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c12/215/index.html) |
| c12        | 218     | キャンバスで描いたグラフィックをダウンロードしたい | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c12/218/index.html) |
| c14        | 233     | `fetch()`メソッドでテキストを読み込みたい           | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/233/index.html) |
| c14        | 234     | `fetch()`メソッドでJSONを読み込みたい              | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/234/index.html) |
| c14        | 235     | `fetch()`メソッドでXMLを読み込みたい               | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/235/index.html) |
| c14        | 236     | `fetch()`メソッドでバイナリを読み込みたい           | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/236/index.html) |
| c14        | 238     | `XMLHttpRequest`でテキストを読み込みたい           | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/238/index.html) |
| c14        | 239     | `XMLHttpRequest`でデータの読み込み状況を取得したい  | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/239/index.html) |
| c14        | 240     | `XMLHttpRequest`で読み込み中の通信をキャンセルしたい | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/240/index.html) |
| c14        | 241     | バックグランドでスクリプトを実行させたい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/241/index.html) |
| c14        | 242     | バックグランドでサービスワーカーを実行させたい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/242/index.html) |
| c14        | 243     | プッシュ通知を実行させたい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c14/243/index.html) |
| c15        | 244     | localStorageを使ってローカルデータを使いたい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c15/244/index.html) |
| c15        | 245     | Storage APIからデータを消したい               | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c15/245/index.html) |
| c15        | 246     | Cookieを使ってローカルデータを使いたい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c15/246/index.html) |
| c15        | 247     | Cookieからデータ読み出したい    | [サーバー上で確認する](https://ics-creative.github.io/js-code-recipe-ie11/transpiled_samples/c15/247/index.html) |

自身で変更したサンプルを確認するにはサーバーが必要です。Google Chromeの拡張機能「[Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)」を使うと、手軽に構築できます。

- 参考：[Web Server for Chromeの設定](https://twitter.com/tonkotsuboy_com/status/868397954532495360)

## `fetch()`メソッドを使ったサンプルについて

14章で解説している`fetch()`メソッドはIE11で動作しませんが、`fetch`用のポリフィルを適用することで動作するようになります。今回は「[github/fetch](https://github.com/github/fetch)」のフェッチを用います。HTMLタグで次のようにポリフィルを読み込みます。

```html
<!DOCTYPE html>
  <!-- 中略 -->
  <!-- fetchのポリフィル  -->
  <script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0.0/dist/fetch.umd.min.js" defer></script>>
  <!-- fetch()を使ったコード  -->
  <script src="main.js" defer></script>
</head>
```

`samples`フォルダー内のコードは、すでにポリフィルを読み込み済みです。該当のサンプルは以下のとおりです。

| 章フォルダー | 項目番号 | 項目名                                   |
|:-----------|:--------|:----------------------------------------|
| c14       | 233     | `fetch()`メソッドでテキストを読み込みたい               |
| c14        | 234     | `fetch()`メソッドでJSONを読み込みたい           |
| c14        | 235     | `fetch()`メソッドでXMLを読み込みたい                 |
| c14        | 236     | `fetch()`メソッドでバイナリを読み込みたい                 |


## Generatorを使ったサンプルについて
19章274「イテレータを自作したい (ジェネレータ)」で解説している`Generator`オブジェクトは、BabelによりIE11対応コードに変換されます。変換されたコードでは、「[regenerator](https://github.com/facebook/regenerator)」というライブラリーが必要なため、手動でスクリプトを追加しています。

▼ コードの追加例

```html
<!-- Generatorのポリフィルに必要なコード -->
<script src="https://cdn.jsdelivr.net/npm/regenerator-runtime@0.13.1/runtime.min.js" defer></script>
<script src="main.js" defer></script>
```

| 章フォルダー | 項目番号 | 項目名                                   |
|:-----------|:--------|:----------------------------------------|
| c19        | 274   | イテレータを自作したい (ジェネレータ)              |


また、`await`を用いたサンプルコードも、Babelを用いると`regenerator`が必要なコードに変換されます。次のサンプルには、`regenerator`のポリフィルを読み込んだサンプルを次に示します。

▼ `await`のIE11対応のために`regenerator`を読み込んでいるサンプル

| 章フォルダー | 項目番号 | 項目名                                   |
|:-----------|:--------|:----------------------------------------|
| c13        | 226（`sample2`フォルダー）     | `Promise`で直列処理をしたい                  |
| c13        | 227     | `Promise`で動的に直列処理をしたい                  |
| c14        | 233     | `fetch()`メソッドでテキストを読み込みたい                 |
| c14        | 234     | `fetch()`メソッドでJSONを読み込みたい                 |
| c14        | 235     | `fetch()`メソッドでXMLを読み込みたい                 |
| c14        | 236     | `fetch()`メソッドでバイナリを読み込みたい                 |

## CSS Gridのレイアウトが崩れるサンプルについて

一部のサンプルについては、CSS Gridを用ているためIE11でレイアウトが崩れます。ツール「[Autoprefixer](https://github.com/postcss/autoprefixer)」を使えばIE11でもCSS Gridのレイアウトを再現できます。JavaScriptの解説からは外れるので、対応方法については省きます。下記を参照ください。

- 参考記事：[Autoprefixerが進化し、CSS GridのIE11対応が楽になった \- Qiita](https://qiita.com/tonkotsuboy_com/items/bce73685cd6b1ea511dc)


## IE11で動作しないサンプルについて

次のサンプルについては、IE11では動作しません。該当機能を使う際は注意しましょう。

| 章フォルダー | 項目番号 | 項目名                                   | IE11で動作しない原因                                       |
|:-----------|:--------|:----------------------------------------|:--------------------------------------------------------|
| c02        | 023     | ランダムな数を使いたい                      | CSS変数に未対応（`Math.random()`は使用可能）                |
| c09        | 175     | スライダーの変更を検知したい                | スライダーの`input`イベントに未対応（`change`イベントには対応） |
| c09        | 176     | カラーピッカーの情報を取得したい             | HTMLのカラーピッカーに未対応                                |
| c09        | 177     | カラーピッカーの変更を検知したい             | HTMLのカラーピッカーに未対応                                |
| c11        | 200     | 音声を読み込みたい（Web Audio API）         | Web Audio APIに未対応                                     |
| c11        | 203     | カメラを使いたい                           | `getDeviceStream()`メソッドに未対応                        |
| c14        | 242     | バックグランドでサービスワーカーを実行させたい | サービスワーカーに未対応                                    |
| c14        | 243     | プッシュ通知を実行させたい                  | Notifications APIに未対応                                 |
