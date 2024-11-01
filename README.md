# 📊 Hesap Makinesi Uygulaması

## 📋 Proje Açıklaması
Bu basit web tabanlı hesap makinesi uygulaması, kullanıcıların toplama, çıkarma, çarpma ve bölme işlemlerini gerçekleştirmesine olanak tanır. Kullanıcı dostu arayüzü ile matematik işlemlerinizi hızlı ve kolay bir şekilde yapabilirsiniz!

## 🚀 Özellikler
- Kullanıcı dostu arayüz
- Temizleme butonu ile hızlı sıfırlama
- Sayı ve operatör tuşları
- Hatalı girişlerde hata mesajı gösterimi

## 🛠️ Gereksinimler
Bu projeyi çalıştırmak için aşağıdaki yazılımlar gerekmektedir:
- Web tarayıcısı (Chrome, Firefox, Safari vb.)

## 📥 Kurulum
1. Bu repository'yi bilgisayarınıza klonlayın veya ZIP dosyası olarak indirin.
2. Aşağıdaki dosyaları oluşturun ve her birine ilgili kodları yapıştırın:

### 1. `index.html`
```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hesap Makinesi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" disabled />
        <div class="buttons">
            <button onclick="clearResult()">C</button>
            <button onclick="appendToResult('7')">7</button>
            <button onclick="appendToResult('8')">8</button>
            <button onclick="appendToResult('9')">9</button>
            <button onclick="appendToResult('/')">/</button>
            <button onclick="appendToResult('4')">4</button>
            <button onclick="appendToResult('5')">5</button>
            <button onclick="appendToResult('6')">6</button>
            <button onclick="appendToResult('*')">*</button>
            <button onclick="appendToResult('1')">1</button>
            <button onclick="appendToResult('2')">2</button>
            <button onclick="appendToResult('3')">3</button>
            <button onclick="appendToResult('-')">-</button>
            <button onclick="appendToResult('0')">0</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToResult('+')">+</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
### 2. `style.css`
```html
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.calculator {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
}

#result {
    width: 100%;
    height: 40px;
    font-size: 24px;
    text-align: right;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    padding: 20px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
```

### 3. `script.js`
```html
function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Hata";
    }
}
```
## 🔄 Nasıl Çalıştırılır?
1. Tarayıcınızda `index.html` dosyasını açın.
2. Hesap makinesi arayüzü karşınıza çıkacaktır.
3. İşlemleri yapmak için tuşlara tıklayın.

## 🤝 Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, pull request gönderebilir veya sorunları rapor edebilirsiniz.

## 📝 Lisans
Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için lütfen `LICENSE` dosyasını kontrol edin.


