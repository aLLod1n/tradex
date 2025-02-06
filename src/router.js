import Vue from "vue";
import VueRouter from "vue-router";
import Lock from "./views/auth/Lock";
import Otp1 from "./views/auth/Otp1";
import Otp2 from "./views/auth/Otp2";
import Reset from "./views/auth/Reset";
// auth
import Signin from "./views/auth/Signin";
import Signup from "./views/auth/Signup";
import AboutUsDark from "./views/Dark/AboutUs";
import BlogDark from "./views/Dark/Blog";
import CareerDark from "./views/Dark/Career";
import ConditionDark from "./views/Dark/Condition";
import ContactDark from "./views/Dark/Contact";
import FaqDark from "./views/Dark/Faq";
import HelpdeskDark from "./views/Dark/Helpdesk";
import DarkLanding from "./views/Dark/Landing";
import DarkLanding2 from "./views/Dark/Landing2";
import PolicyDark from "./views/Dark/Policy";
import PriceDark from "./views/Dark/Price";
import SingleBlogDark from "./views/Dark/SingleBlog";
import TeamDark from "./views/Dark/Team";
import WalletDark from "./views/Dark/Wallet";
import AddBankAccount from "./views/Dashboard/AddBankAccount";
import AddDebitCard from "./views/Dashboard/AddDebitCard";
import BuyAndSell from "./views/Dashboard/BuyAndSell";
// Setting
import EditProfile from "./views/Dashboard/EditProfile";
import History from "./views/Dashboard/History";
import IDVerified from "./views/Dashboard/IDVerified";
import IDVerifying from "./views/Dashboard/IDVerifying";
// Deshboard
import Dashboard from "./views/Dashboard/Index";
import LinkedAccount from "./views/Dashboard/LinkedAccount";
import Preferences from "./views/Dashboard/Preferences";
import Recommendation from "./views/Dashboard/Recommendation";
import Security from "./views/Dashboard/Security";
import Success from "./views/Dashboard/Success";
import Accounts from "./views/Dashboard/Team";
import UploadID from "./views/Dashboard/UploadID";
import VerifyID from "./views/Dashboard/VerifyID";
import Demo from "./views/Demo.vue";
import AboutUsLight from "./views/Light/AboutUs";
import BlogLight from "./views/Light/Blog";
import CareerLight from "./views/Light/Career";
import Condition from "./views/Light/Condition";
import ContactLight from "./views/Light/Contact";
import FaqLight from "./views/Light/Faq";
import HelpdeskLight from "./views/Light/Helpdesk";
// Light
import LightLanding from "./views/Light/Landing";
import LightLanding2 from "./views/Light/Landing2";
import Policy from "./views/Light/Policy";
import PriceLight from "./views/Light/Price";
import SingleBlogLight from "./views/Light/SingleBlog";
import TeamLight from "./views/Light/Team";
import WalletLight from "./views/Light/Wallet";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/terms-condition-dark",
    name: "ConditionDark",
    component: ConditionDark,
  },
  {
    path: "/privacy-policy-dark",
    name: "PolicyDark",
    component: PolicyDark,
  },
  {
    path: "/terms-condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "/privacy-policy",
    name: "Policy",
    component: Policy,
  },
  {
    path: "/lock-dark",
    name: "Lock",
    component: Lock,
    props: { dark: true },
  },
  {
    path: "/lock",
    name: "Lock",
    component: Lock,
    props: { dark: false },
  },
  {
    path: "/history-dark",
    name: "History",
    component: History,
    props: { dark: true },
  },
  {
    path: "/history",
    name: "History",
    component: History,
    props: { dark: false },
  },
  {
    path: "/verify-step-6-dark",
    name: "Success",
    component: Success,
    props: { dark: true },
  },
  {
    path: "/verify-step-6",
    name: "Success",
    component: Success,
    props: { dark: false },
  },
  {
    path: "/add-debit-card-dark",
    name: "AddDebitCard",
    component: AddDebitCard,
    props: { dark: true },
  },
  {
    path: "/add-debit-card",
    name: "AddDebitCard",
    component: AddDebitCard,
    props: { dark: false },
  },
  {
    path: "/verify-step-5-dark",
    name: "Recommendation",
    component: Recommendation,
    props: { dark: true },
  },
  {
    path: "/verify-step-5",
    name: "Recommendation",
    component: Recommendation,
    props: { dark: false },
  },
  {
    path: "/add-bank-acc-dark",
    name: "AddBankAccount",
    component: AddBankAccount,
    props: { dark: true },
  },
  {
    path: "/add-bank-acc",
    name: "AddBankAccount",
    component: AddBankAccount,
    props: { dark: false },
  },
  {
    path: "/settings-account-dark",
    name: "LinkedAccount",
    component: LinkedAccount,
    props: { dark: true },
  },
  {
    path: "/settings-account",
    name: "LinkedAccount",
    component: LinkedAccount,
    props: { dark: false },
  },
  {
    path: "/settings-security-dark",
    name: "Security",
    component: Security,
    props: { dark: true },
  },
  {
    path: "/settings-security",
    name: "Security",
    component: Security,
    props: { dark: false },
  },
  {
    path: "/settings-preferences-dark",
    name: "Preferences",
    component: Preferences,
    props: { dark: true },
  },
  {
    path: "/settings-preferences",
    name: "Preferences",
    component: Preferences,
    props: { dark: false },
  },
  {
    path: "/settings-dark",
    name: "EditProfile",
    component: EditProfile,
    props: { dark: true },
  },
  {
    path: "/settings",
    name: "EditProfile",
    component: EditProfile,
    props: { dark: false },
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts,
    props: { dark: false },
  },
  {
    path: "/accounts-dark",
    name: "Accounts",
    component: Accounts,
    props: { dark: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    props: { dark: false },
  },
  {
    path: "/dashboard-dark",
    name: "Dashboard",
    component: Dashboard,
    props: { dark: true },
  },
  {
    path: "/buy-sell-dark",
    name: "BuyAndSell",
    component: BuyAndSell,
    props: { dark: true },
  },
  {
    path: "/buy-sell",
    name: "BuyAndSell",
    component: BuyAndSell,
    props: { dark: false },
  },

  // auth
  {
    path: "/signin-dark",
    name: "SigninDark",
    component: Signin,
    props: { dark: true },
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    props: { dark: false },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    props: { dark: false },
  },
  {
    path: "/signup-dark",
    name: "Signup",
    component: Signup,
    props: { dark: true },
  },
  {
    path: "/reset-dark",
    name: "ResetDark",
    component: Reset,
    props: { dark: true },
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
    props: { dark: false },
  },
  {
    path: "/otp1",
    name: "Otp1",
    component: Otp1,
    props: { dark: false },
  },
  {
    path: "/otp-1-dark",
    name: "Otp1Dark",
    component: Otp1,
    props: { dark: true },
  },
  {
    path: "/otp-2",
    name: "Otp2Dark",
    component: Otp2,
    props: { dark: false },
  },
  {
    path: "/otp-2-dark",
    name: "Otp2Dark",
    component: Otp2,
    props: { dark: true },
  },
  {
    path: "/verify-step-4",
    name: "IDVerifiedDark",
    component: IDVerified,
    props: { dark: false },
  },
  {
    path: "/verify-step-4-dark",
    name: "IDVerifiedDark",
    component: IDVerified,
    props: { dark: true },
  },
  {
    path: "/verify-step-3",
    name: "IDVerifyingDark",
    component: IDVerifying,
    props: { dark: false },
  },
  {
    path: "/verify-step-3-dark",
    name: "IDVerifyingDark",
    component: IDVerifying,
    props: { dark: true },
  },
  {
    path: "/verify-step-2-dark",
    name: "UploadIDDark",
    component: UploadID,
    props: { dark: true },
  },
  {
    path: "/verify-step-2",
    name: "UploadIDDark",
    component: UploadID,
    props: { dark: false },
  },
  {
    path: "/verify-step-1",
    name: "VerifyIDDark",
    component: VerifyID,
    props: { dark: false },
  },
  {
    path: "/verify-step-1-dark",
    name: "VerifyIDDark",
    component: VerifyID,
    props: { dark: true },
  },

  {
    path: "/index-dark",
    name: "DarkLanding",
    component: DarkLanding,
  },
  {
    path: "/index2-dark",
    name: "DarkLanding2",
    component: DarkLanding2,
  },
  {
    path: "/price-dark",
    name: "PriceDark",
    component: PriceDark,
  },
  {
    path: "/wallet-dark",
    name: "WalletDark",
    component: WalletDark,
  },
  {
    path: "/about-dark",
    name: "AboutUsDark",
    component: AboutUsDark,
  },
  {
    path: "/team-dark",
    name: "TeamDark",
    component: TeamDark,
  },
  {
    path: "/blog-dark",
    name: "BlogDark",
    component: BlogDark,
  },
  {
    path: "/blog-single-dark",
    name: "SingleBlogDark",
    component: SingleBlogDark,
  },
  {
    path: "/career-dark",
    name: "CareerDark",
    component: CareerDark,
  },
  {
    path: "/contact-dark",
    name: "ContactDark",
    component: ContactDark,
  },
  {
    path: "/helpdesk-dark",
    name: "HelpdeskDark",
    component: HelpdeskDark,
  },
  {
    path: "/faq-dark",
    name: "FaqDark",
    component: FaqDark,
  },
  {
    path: "/",
    name: "LightLanding",
    component: LightLanding,
  },
  {
    path: "/index2",
    name: "LightLanding2",
    component: LightLanding2,
  },
  {
    path: "/price",
    name: "PriceLight",
    component: PriceLight,
  },
  {
    path: "/wallet",
    name: "WalletLight",
    component: WalletLight,
  },
  {
    path: "/about",
    name: "AboutUsLight",
    component: AboutUsLight,
  },
  {
    path: "/team",
    name: "TeamLight",
    component: TeamLight,
  },
  {
    path: "/blog",
    name: "BlogLight",
    component: BlogLight,
  },
  {
    path: "/blog-single",
    name: "SingleBlogLight",
    component: SingleBlogLight,
  },
  {
    path: "/career",
    name: "CareerLight",
    component: CareerLight,
  },
  {
    path: "/contact",
    name: "ContactLight",
    component: ContactLight,
  },
  {
    path: "/helpdesk",
    name: "HelpdeskLight",
    component: HelpdeskLight,
  },
  {
    path: "/faq",
    name: "FaqLight",
    component: FaqLight,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
