import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logologin from '../../assest/images/loginimg.jpg'
import Swal from 'sweetalert2'
// import {handleLogin} from '../../services/auth';

async function handleRegis(event) {
    event.preventDefault();
    const payload = {
        username: event.target.elements.email.value,
        fullname: event.target.elements.fullname.value,
        email: event.target.elements.email.value,
        phone: event.target.elements.phone.value,
        password: event.target.elements.password.value
    };
    const res = await fetch('http://localhost:8080/api/regis', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(payload)
    });
    var result = await res.json()
    console.log(result);
    if (res.status == 417) {
        toast.error(result.defaultMessage);
    }
    if(res.status < 300){
        Swal.fire({
            title: "Thông báo",
            text: "đăng ký thành công! hãy check email của bạn!",
            type: "success"
        },
        function() {
            window.location = 'confirm?email=' + result.email
        });
    }
};

function regis(){
    return(
        <div class="contentmain">
            <div class="loginform row" style={{  
                backgroundImage: "url(" + logologin + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                <div class="col-sm-7">

                </div>
                <div class="contentlogin col-sm-5">
                    <form autocomplete="off" class="inputloginform" onSubmit={handleRegis}>
                        <input name="fullname" placeholder="Họ tên" class="inputform" />
                        <input name="phone" placeholder="Số điện thoại" class="inputform"/>
                        <input name="email" placeholder="Địa chỉ email" class="inputform" type="email" required/>
                        <input name="password" placeholder="Mật khẩu" class="inputform" type="password" required/>
                        <button class="btndn">Đăng Ký</button>
                        <p class="nothvaccount"><span>Bạn đã có tài khoản? </span><a href="login" class="aquenmk">Đăng nhập ngay</a></p>
                    </form>
                </div>
            </div>
        </div>
        
    );
}
export default regis;