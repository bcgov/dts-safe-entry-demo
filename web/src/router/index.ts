import OidcCallback from "@/components/auth/OidcCallback.vue";
import OidcCallbackError from "@/components/auth/OidcCallbackError.vue";
import { AppConfig } from "@/models/appConfig";
import IssuerStore from "@/store";
import PreRegister from "@/views/PreRegister.vue";
import ManageLocations from "@/views/ManageLocations.vue";
import AddLocation from "@/views/AddLocation.vue";
import UpdateLocation from "@/views/UpdateLocation.vue";
import Unauthorized from "@/views/Unauthorized.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { vuexOidcCreateRouterMiddleware } from "vuex-oidc";
// import validToken from "./guards/valid-token";

function router(config: AppConfig): VueRouter {
  Vue.use(VueRouter);

  // Application routes
  const appRoutes = [
    {
      path: "/",
      name: "Home",
      component: PreRegister,
      meta: {
        isPublic: true
      }
      // beforeEnter: validToken
    },
    {
      path: "/manage",
      name: "Manage Organizations",
      component: ManageLocations,
      meta: {
        isPublic: true
      }
      // beforeEnter: validToken
    },
    {
      path: "/register",
      name: "Register Organization",
      component: AddLocation,
      meta: {
        isPublic: true
      }
      // beforeEnter: validToken
    },
    {
      path: "/update",
      name: "Update Location",
      component: UpdateLocation,
      meta: {
        isPublic: true
      }
      // beforeEnter: validToken
    },
    // {
    //   path: "/employees",
    //   name: "Manage Employees",
    //   component: RegisterEmployees,
    //   meta: {
    //     isPublic: true
    //   }
    //   // beforeEnter: validToken
    // },
    // {
    //   // required for backwards compatibility with old issuer app
    //   path: "/validate",
    //   name: "Validate",
    //   component: Home,
    //   meta: {
    //     isPublic: true
    //   },
    //   beforeEnter: validToken
    // },
    // {
    //   path: "/credential-data",
    //   name: "Credential Data",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "data-entry" */ "../views/DataEntry.vue"),
    //   beforeEnter: validToken
    // },
    // {
    //   path: "/confirm-data",
    //   name: "Confirm Data",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "confirm-data" */ "../views/ConfirmData.vue"
    //     ),
    //   beforeEnter: validToken
    // },
    // {
    //   path: "/connect",
    //   name: "Connect to Issuer",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "connect" */ "../views/Connect.vue"),
    //   beforeEnter: validToken
    // },
    // {
    //   path: "/issue-credential",
    //   name: "Issuing Credential",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "issue-credential" */ "../views/IssueCredential.vue"
    //     ),
    //   beforeEnter: validToken
    // },
    // {
    //   path: "/unauthorized",
    //   name: "Unauthorized",
    //   component: Unauthorized,
    //   meta: {
    //     isPublic: true
    //   }
    // },
    {
      path: "*",
      name: "Undefined",
      component: Unauthorized,
      meta: {
        isPublic: true
      }
    }
  ] as RouteConfig[];

  // OIDC specific routes
  const oidcRoutes = [
    {
      path: "/oidc-callback", // Needs to match redirectUri in you oidcSettings
      name: "oidcCallback",
      component: OidcCallback
    },
    {
      path: "/oidc-callback-error", // Needs to match redirect_uri in you oidcSettings
      name: "oidcCallbackError",
      component: OidcCallbackError,
      meta: {
        isPublic: true
      }
    }
  ] as RouteConfig[];

  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: config.authentication.enabled
      ? appRoutes.concat(oidcRoutes)
      : appRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    }
  });

  if (config.authentication.enabled) {
    // enable oidc middleware
    router.beforeEach(
      vuexOidcCreateRouterMiddleware(IssuerStore.getInstance(), "oidcStore")
    );
  }

  return router;
}
export default router;
