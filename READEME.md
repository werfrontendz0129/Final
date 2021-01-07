## 圖片的絕對路徑設置
### 基本建設
![](https://i.imgur.com/mP9fjRs.png)

1.在src下創建一個資料夾=> config
2.在config裡建一個 index.js
3.在index.js裡面輸入 `export const devUrl = 'http://localhost:3000'` ，存檔

---
### 圖片放哪?
![](https://i.imgur.com/SNc4BR5.png)

放在`public/images/coures...`

---

### 引入方法
在你要引入的元件先 `import { devUrl } from '../../../config/index'`
ps: `../`這邊看你要出去幾層


---
### 放入img
![](https://i.imgur.com/NRAY6lS.png)

`<img src={devUrl + 'images/....你圖片的路徑'}/>`