# 使用v2rayN做分流配置

2026/1/14

::: warning 環境
OS：win11、v2rayN：V7.10.4
:::

## 1.設定系統不代理網址

找到左上角的設定 -> 參數設定 -> 系統代理設置  
將裡面的網段和網域全部取代為不用代理的，也可以根據人習慣添加一些常用網域。

```
localhost;127.;10.;172.;192.168.;.tw;.com.tw;.edu.tw;.gov.tw;*.net.tw;google.com;youtube.com;
```

## 2.設定分流代理規則

找到左上角的設定 -> 路由設定  
預設有三種路由模式，選擇全局(Global)來新增分流規則。

![範例1](/image/v2rayn-howto/1.png)

1. 刪除原本的「最終代理」規則。
2. 新增一條proxy規則，在Domain新增要代理的網域。

```
geosite:dmm
```
::: tip
// geosite -> 找資料庫  
// dmm -> tag，用來代表所有跟dmm有關的網址/網域
:::

3. 新增一條direct規則，在Domain新增所有要直連的網域。

```
regexp:.*
```

::: tip
// regexp -> 模糊搜尋，只要有符合條件的都抓  
// .* -> 全部
:::

4. 將proxy移到最上面，direct反之。

![範例2](/image/v2rayn-howto/2.png)

::: danger
順序很重要，順序不對會代理不到，全部直連。
:::

## 驗證

- 指定代理的程式能正常運行。
- 自己本地IP沒有變化。

這樣就代表，分流成功。
