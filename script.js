const msg = document.getElementById("msg");

function showMessage(){

    msg.innerHTML = `
     ระบบ CI/CD ทำงานได้อย่างถูกต้อง! <br><br>
     Deploy สำเร็จผ่าน GitHub Actions <br>
     เว็บไซต์ออนไลน์ด้วย GitHub Pages
    `;

    msg.style.color = "green";
}

// แสดงข้อความอัตโนมัติเมื่อเปิดเว็บ
window.onload = function(){

    setTimeout(() => {

        msg.innerHTML = " Welcome to my GitHub Pages Website";
        msg.style.color = "#0077ff";

    },500);

}
