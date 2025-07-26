(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1235], { 7081: function(e, t, r) { Promise.resolve().then(r.bind(r, 1176)) }, 1176: function(e, t, r) { "use strict";
            r.r(t), r.d(t, { default: function() { return p } }); var a = r(7437),
                s = r(2265),
                n = r(9376),
                i = r(2869),
                o = r(5186),
                l = r(6815),
                d = r(6070),
                c = r(3647),
                u = r(3145),
                f = r(4508),
                m = r(5153);

            function p() { let [e, t] = (0, s.useState)(!1), [r, p] = (0, s.useState)("player"), [h, x] = (0, s.useState)(""), [g, v] = (0, s.useState)(""), [b, y] = (0, s.useState)(""), [j, N] = (0, s.useState)(""), [w, S] = (0, s.useState)(""), [_, T] = (0, s.useState)(!1), [R, k] = (0, s.useState)(!0), [I, C] = (0, s.useState)(!1), P = (0, n.useRouter)(), A = (0, n.useSearchParams)(), { toast: O } = (0, m.pm)();
                (0, s.useEffect)(() => { "register" === A.get("mode") && t(!0); let e = A.get("role");
                    e && ["player", "scout", "team"].includes(e) && p(e) }, [A]); let D = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
                    X = e => e.length >= 8,
                    E = e => /^[2-7]\d{6}$/.test(e),
                    z = async e => { let t = e.target.value;
                        v(t), t.length > 3 ? (C(!0), await new Promise(e => setTimeout(e, 500)), k(!["admin", "testuser", "scoutme"].includes(t.toLowerCase())), C(!1)) : k(!0) },
                    M = async t => { if (t.preventDefault(), T(!0), !D(b)) { O({ title: "Invalid Email", description: "Please enter a valid email address.", variant: "destructive" }), T(!1); return } if (!X(j)) { O({ title: "Weak Password", description: "Password must be at least 8 characters long.", variant: "destructive" }), T(!1); return } if (e) { if (!h.trim()) { O({ title: "Name Required", description: "Please enter your name.", variant: "destructive" }), T(!1); return } if (!g.trim()) { O({ title: "Username Required", description: "Please enter a username.", variant: "destructive" }), T(!1); return } if (!R) { O({ title: "Username Taken", description: "This username is already taken. Please choose another.", variant: "destructive" }), T(!1); return } if (!E(w)) { O({ title: "Invalid Phone Number", description: "Please enter a valid 7-digit Gambian phone number (e.g., 2XX XXXX, 7XX XXXX).", variant: "destructive" }), T(!1); return }
                            await new Promise(e => setTimeout(e, 1500)); let e = { uid: "user-".concat(Date.now()), email: b, name: h, role: r, phone: w, username: g };
                            localStorage.setItem("user", JSON.stringify(e)), O({ title: "Registration Successful!", description: "Welcome, ".concat(h, "! Redirecting to your ").concat(r, " dashboard.") }), P.push("/".concat(r, "/dashboard")) } else { await new Promise(e => setTimeout(e, 1500)); let e = { uid: "user-".concat(Date.now()), email: b, name: "Demo User", role: "player" };
                            localStorage.setItem("user", JSON.stringify(e)), O({ title: "Login Successful!", description: "Welcome back! Redirecting to your dashboard." }), P.push("/".concat(e.role, "/dashboard")) }
                        T(!1) }; return (0, a.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-cyan-700 p-4", children: (0, a.jsxs)(d.Zb, { className: "w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg border-none", children: [(0, a.jsxs)(d.Ol, { className: "text-center space-y-2", children: [(0, a.jsx)(u.default, { src: "/images/scoutme-logo.png", alt: "ScoutMe Gambia", width: 80, height: 80, className: "mx-auto rounded-lg mb-2" }), (0, a.jsx)(d.ll, { className: "text-3xl font-bold bg-gradient-to-r from-navy-800 to-cyan-600 text-transparent bg-clip-text", children: e ? "Join ScoutMe Gambia" : "Welcome Back" }), (0, a.jsx)("p", { className: "text-slate-600", children: e ? "Create your account to get started." : "Sign in to continue to your dashboard." })] }), (0, a.jsxs)(d.aY, { children: [(0, a.jsxs)("form", { onSubmit: M, className: "space-y-4", children: [e && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "name", children: "Full Name" }), (0, a.jsx)(o.I, { id: "name", type: "text", placeholder: "John Doe", value: h, onChange: e => x(e.target.value), required: !0, className: "border-slate-300 focus-visible:ring-navy-500" })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "username", children: "Username" }), (0, a.jsx)(o.I, { id: "username", type: "text", placeholder: "johndoe", value: g, onChange: z, required: !0, className: (0, f.cn)("border-slate-300 focus-visible:ring-navy-500", g.length > 0 && !R && "border-red-500") }), I && (0, a.jsx)("p", { className: "text-sm text-slate-500 mt-1", children: "Checking availability..." }), g.length > 0 && !R && !I && (0, a.jsx)("p", { className: "text-sm text-red-500 mt-1", children: "Username is taken." })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "phone", children: "Phone Number (Gambia)" }), (0, a.jsx)(o.I, { id: "phone", type: "tel", placeholder: "7XX XXXX", value: w, onChange: e => S(e.target.value), required: !0, className: (0, f.cn)("border-slate-300 focus-visible:ring-navy-500", w.length > 0 && !E(w) && "border-red-500") }), w.length > 0 && !E(w) && (0, a.jsx)("p", { className: "text-sm text-red-500 mt-1", children: "Invalid Gambian phone number." })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "role", children: "Register As" }), (0, a.jsxs)(c.Ph, { value: r, onValueChange: p, children: [(0, a.jsx)(c.i4, { className: "w-full border-slate-300 focus:ring-navy-500", children: (0, a.jsx)(c.ki, { placeholder: "Select a role" }) }), (0, a.jsxs)(c.Bw, { children: [(0, a.jsx)(c.Ql, { value: "player", children: "Player" }), (0, a.jsx)(c.Ql, { value: "scout", children: "Scout" }), (0, a.jsx)(c.Ql, { value: "team", children: "Team Administrator" })] })] })] })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "email", children: "Email" }), (0, a.jsx)(o.I, { id: "email", type: "email", placeholder: "m.salah@example.com", value: b, onChange: e => y(e.target.value), required: !0, className: "border-slate-300 focus-visible:ring-navy-500" })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)(l._, { htmlFor: "password", children: "Password" }), (0, a.jsx)(o.I, { id: "password", type: "password", placeholder: "••••••••", value: j, onChange: e => N(e.target.value), required: !0, className: "border-slate-300 focus-visible:ring-navy-500" })] }), (0, a.jsx)(i.z, { type: "submit", className: "w-full bg-navy-700 hover:bg-navy-800 text-white", disabled: _, children: _ ? "Loading..." : e ? "Register" : "Login" })] }), (0, a.jsxs)("div", { className: "mt-6 text-center text-sm text-slate-600", children: [e ? "Already have an account?" : "Don't have an account?", " ", (0, a.jsx)(i.z, { variant: "link", onClick: () => { t(!e), P.push("/auth?mode=".concat(e ? "login" : "register")) }, className: "p-0 h-auto text-navy-700 hover:text-navy-800", children: e ? "Login" : "Register" })] })] })] }) }) } }, 2869: function(e, t, r) { "use strict";
            r.d(t, { z: function() { return d } }); var a = r(7437),
                s = r(2265),
                n = r(7053),
                i = r(535),
                o = r(4508); let l = (0, i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }),
                d = s.forwardRef((e, t) => { let { className: r, variant: s, size: i, asChild: d = !1, ...c } = e, u = d ? n.g7 : "button"; return (0, a.jsx)(u, { className: (0, o.cn)(l({ variant: s, size: i, className: r })), ref: t, ...c }) });
            d.displayName = "Button" }, 6070: function(e, t, r) { "use strict";
            r.d(t, { Ol: function() { return o }, SZ: function() { return d }, Zb: function() { return i }, aY: function() { return c }, ll: function() { return l } }); var a = r(7437),
                s = r(2265),
                n = r(4508); let i = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", r), ...s }) });
            i.displayName = "Card"; let o = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("flex flex-col space-y-1.5 p-6", r), ...s }) });
            o.displayName = "CardHeader"; let l = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("text-2xl font-semibold leading-none tracking-tight", r), ...s }) });
            l.displayName = "CardTitle"; let d = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("text-sm text-muted-foreground", r), ...s }) });
            d.displayName = "CardDescription"; let c = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("p-6 pt-0", r), ...s }) });
            c.displayName = "CardContent", s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)("div", { ref: t, className: (0, n.cn)("flex items-center p-6 pt-0", r), ...s }) }).displayName = "CardFooter" }, 5186: function(e, t, r) { "use strict";
            r.d(t, { I: function() { return i } }); var a = r(7437),
                s = r(2265),
                n = r(4508); let i = s.forwardRef((e, t) => { let { className: r, type: s, ...i } = e; return (0, a.jsx)("input", { type: s, className: (0, n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r), ref: t, ...i }) });
            i.displayName = "Input" }, 6815: function(e, t, r) { "use strict";
            r.d(t, { _: function() { return d } }); var a = r(7437),
                s = r(2265),
                n = r(6394),
                i = r(535),
                o = r(4508); let l = (0, i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                d = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)(n.f, { ref: t, className: (0, o.cn)(l(), r), ...s }) });
            d.displayName = n.f.displayName }, 3647: function(e, t, r) { "use strict";
            r.d(t, { Bw: function() { return h }, Ph: function() { return c }, Ql: function() { return x }, i4: function() { return f }, ki: function() { return u } }); var a = r(7437),
                s = r(2265),
                n = r(6873),
                i = r(875),
                o = r(2135),
                l = r(401),
                d = r(4508); let c = n.fC;
            n.ZA; let u = n.B4,
                f = s.forwardRef((e, t) => { let { className: r, children: s, ...o } = e; return (0, a.jsxs)(n.xz, { ref: t, className: (0, d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", r), ...o, children: [s, (0, a.jsx)(n.JO, { asChild: !0, children: (0, a.jsx)(i.Z, { className: "h-4 w-4 opacity-50" }) })] }) });
            f.displayName = n.xz.displayName; let m = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)(n.u_, { ref: t, className: (0, d.cn)("flex cursor-default items-center justify-center py-1", r), ...s, children: (0, a.jsx)(o.Z, { className: "h-4 w-4" }) }) });
            m.displayName = n.u_.displayName; let p = s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)(n.$G, { ref: t, className: (0, d.cn)("flex cursor-default items-center justify-center py-1", r), ...s, children: (0, a.jsx)(i.Z, { className: "h-4 w-4" }) }) });
            p.displayName = n.$G.displayName; let h = s.forwardRef((e, t) => { let { className: r, children: s, position: i = "popper", ...o } = e; return (0, a.jsx)(n.h_, { children: (0, a.jsxs)(n.VY, { ref: t, className: (0, d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === i && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r), position: i, ...o, children: [(0, a.jsx)(m, {}), (0, a.jsx)(n.l_, { className: (0, d.cn)("p-1", "popper" === i && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: s }), (0, a.jsx)(p, {})] }) }) });
            h.displayName = n.VY.displayName, s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)(n.__, { ref: t, className: (0, d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r), ...s }) }).displayName = n.__.displayName; let x = s.forwardRef((e, t) => { let { className: r, children: s, ...i } = e; return (0, a.jsxs)(n.ck, { ref: t, className: (0, d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r), ...i, children: [(0, a.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, a.jsx)(n.wU, { children: (0, a.jsx)(l.Z, { className: "h-4 w-4" }) }) }), (0, a.jsx)(n.eT, { children: s })] }) });
            x.displayName = n.ck.displayName, s.forwardRef((e, t) => { let { className: r, ...s } = e; return (0, a.jsx)(n.Z0, { ref: t, className: (0, d.cn)("-mx-1 my-1 h-px bg-muted", r), ...s }) }).displayName = n.Z0.displayName }, 5153: function(e, t, r) { "use strict";
            r.d(t, { pm: function() { return f } }); var a = r(2265); let s = 0,
                n = new Map,
                i = e => { if (n.has(e)) return; let t = setTimeout(() => { n.delete(e), c({ type: "REMOVE_TOAST", toastId: e }) }, 1e6);
                    n.set(e, t) },
                o = (e, t) => { switch (t.type) {
                        case "ADD_TOAST":
                            return {...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
                        case "UPDATE_TOAST":
                            return {...e, toasts: e.toasts.map(e => e.id === t.toast.id ? {...e, ...t.toast } : e) };
                        case "DISMISS_TOAST":
                            { let { toastId: r } = t; return r ? i(r) : e.toasts.forEach(e => { i(e.id) }), {...e, toasts: e.toasts.map(e => e.id === r || void 0 === r ? {...e, open: !1 } : e) } }
                        case "REMOVE_TOAST":
                            if (void 0 === t.toastId) return {...e, toasts: [] }; return {...e, toasts: e.toasts.filter(e => e.id !== t.toastId) } } },
                l = [],
                d = { toasts: [] };

            function c(e) { d = o(d, e), l.forEach(e => { e(d) }) }

            function u(e) { let {...t } = e, r = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(), a = () => c({ type: "DISMISS_TOAST", toastId: r }); return c({ type: "ADD_TOAST", toast: {...t, id: r, open: !0, onOpenChange: e => { e || a() } } }), { id: r, dismiss: a, update: e => c({ type: "UPDATE_TOAST", toast: {...e, id: r } }) } }

            function f() { let [e, t] = a.useState(d); return a.useEffect(() => (l.push(t), () => { let e = l.indexOf(t);
                    e > -1 && l.splice(e, 1) }), [e]), {...e, toast: u, dismiss: e => c({ type: "DISMISS_TOAST", toastId: e }) } } }, 4508: function(e, t, r) { "use strict";
            r.d(t, { cn: function() { return n } }); var a = r(1994),
                s = r(3335);

            function n() { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return (0, s.m6)((0, a.W)(t)) } }, 6394: function(e, t, r) { "use strict";
            r.d(t, { f: function() { return o } }); var a = r(2265),
                s = r(6840),
                n = r(7437),
                i = a.forwardRef((e, t) => (0, n.jsx)(s.WV.label, {...e, ref: t, onMouseDown: t => { var r;
                        t.target.closest("button, input, select, textarea") || (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault()) } }));
            i.displayName = "Label"; var o = i } },
    function(e) { e.O(0, [8014, 9850, 7401, 4122, 5763, 2971, 2117, 1744], function() { return e(e.s = 7081) }), _N_E = e.O() }
]);