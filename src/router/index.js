import layoutAdmin from '../layout/admin/Layout'
import layoutEmployee from '../layout/employee/LayoutEmployee'
import layoutLogin from '../layout/user/loginlayout/login'

//admin
import homeAdmin from '../pages/admin/home/home'
import userAdmin from '../pages/admin/user/user'
import employeeAdmin from '../pages/admin/employee/employee'
import addEmployeeAdmin from '../pages/admin/employee/addemployee'


//public
import login from '../pages/public/login'
import index from '../pages/public/index'
import regis from '../pages/public/regis'

//private
import DefaultLayout from '../layout/user/defaultLayout/defaultLayout'
import curriculum from '../pages/student/curriculum'
import accountStudent from '../pages/student/account'

const publicRoutes = [
    { path: "/", component: index},
    { path: "/index", component: index},
    { path: "/login", component: login, layout: layoutLogin },
    { path: "/regis", component: regis, layout: layoutLogin },
];

const privateRoutes = [
    { path: "/dao-tao/student", component: curriculum, layout: DefaultLayout},
    { path: "/account-student", component: accountStudent, layout: DefaultLayout},
];

const adminRoutes = [
    { path: "/admin/home", component: homeAdmin, layout: layoutAdmin },
    { path: "/admin/user", component: userAdmin, layout: layoutAdmin },
    { path: "/admin/employee", component: employeeAdmin, layout: layoutAdmin },
    { path: "/admin/add-employee", component: addEmployeeAdmin, layout: layoutAdmin },
];



export { publicRoutes, privateRoutes, adminRoutes};
