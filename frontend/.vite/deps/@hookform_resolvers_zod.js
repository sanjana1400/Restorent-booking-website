import {
  appendErrors,
  get,
  set
} from "./chunk-SBTNGKTE.js";
import "./chunk-YLDSBLSF.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@hookform/resolvers/dist/resolvers.mjs
var s = (t, s3, o2) => {
  if (t && "reportValidity" in t) {
    const r2 = get(o2, s3);
    t.setCustomValidity(r2 && r2.message || ""), t.reportValidity();
  }
};
var o = (e, t) => {
  for (const o2 in t.fields) {
    const r2 = t.fields[o2];
    r2 && r2.ref && "reportValidity" in r2.ref ? s(r2.ref, o2, e) : r2 && r2.refs && r2.refs.forEach((t2) => s(t2, o2, e));
  }
};
var r = (s3, r2) => {
  r2.shouldUseNativeValidation && o(s3, r2);
  const f = {};
  for (const o2 in s3) {
    const n2 = get(r2.fields, o2), a = Object.assign(s3[o2] || {}, { ref: n2 && n2.ref });
    if (i(r2.names || Object.keys(s3), o2)) {
      const s4 = Object.assign({}, get(f, o2));
      set(s4, "root", a), set(f, o2, s4);
    } else set(f, o2, a);
  }
  return f;
};
var i = (e, t) => e.some((e2) => e2.match(`^${t}\\.\\d+`));

// node_modules/@hookform/resolvers/zod/dist/zod.mjs
function n(r2, e) {
  for (var n2 = {}; r2.length; ) {
    var s3 = r2[0], t = s3.code, i2 = s3.message, a = s3.path.join(".");
    if (!n2[a]) if ("unionErrors" in s3) {
      var u = s3.unionErrors[0].errors[0];
      n2[a] = { message: u.message, type: u.code };
    } else n2[a] = { message: i2, type: t };
    if ("unionErrors" in s3 && s3.unionErrors.forEach(function(e2) {
      return e2.errors.forEach(function(e3) {
        return r2.push(e3);
      });
    }), e) {
      var c = n2[a].types, f = c && c[s3.code];
      n2[a] = appendErrors(a, e, n2, t, f ? [].concat(f, s3.message) : s3.message);
    }
    r2.shift();
  }
  return n2;
}
function s2(o2, s3, t) {
  return void 0 === t && (t = {}), function(i2, a, u) {
    try {
      return Promise.resolve(function(e, n2) {
        try {
          var a2 = Promise.resolve(o2["sync" === t.mode ? "parse" : "parseAsync"](i2, s3)).then(function(e2) {
            return u.shouldUseNativeValidation && o({}, u), { errors: {}, values: t.raw ? Object.assign({}, i2) : e2 };
          });
        } catch (r2) {
          return n2(r2);
        }
        return a2 && a2.then ? a2.then(void 0, n2) : a2;
      }(0, function(r2) {
        if (function(r3) {
          return Array.isArray(null == r3 ? void 0 : r3.errors);
        }(r2)) return { values: {}, errors: r(n(r2.errors, !u.shouldUseNativeValidation && "all" === u.criteriaMode), u) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
}
export {
  s2 as zodResolver
};
//# sourceMappingURL=@hookform_resolvers_zod.js.map
