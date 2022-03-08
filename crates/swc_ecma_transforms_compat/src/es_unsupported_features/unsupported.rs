use swc_ecma_ast::*;
use swc_ecma_utils::HANDLER;
use swc_ecma_visit::{as_folder, noop_visit_mut_type, Fold, VisitMut};

/// # Example
///
/// # In
///
/// ```js
/// async function foo() {
/// 	    return "hello";
/// }
///
/// foo().then(function(value) { return value; },
/// 	   function(error) { return error; });
/// ```
///
/// ## Out
///
/// ```js
/// TODO
/// ```

struct UnsupportedFeature;

#[tracing::instrument(level = "trace", skip_all)]
pub fn unsupported() -> impl Fold + VisitMut {
    as_folder(UnsupportedFeature)
}

impl VisitMut for UnsupportedFeature {
    noop_visit_mut_type!();

    fn visit_mut_fn_decl(&mut self, f: &mut FnDecl) {
        if f.function.is_async {
            let error = format!("Async function is not supported.");
            HANDLER.with(|handler| handler.struct_span_err(f.function.span, &error).emit());
        }
    }

    fn visit_mut_arrow_expr(&mut self, f: &mut ArrowExpr) {
        if f.is_async {
            let error = format!("Async arrow expression is not supported.");
            HANDLER.with(|handler| handler.struct_span_err(f.span, &error).emit());
        }
    }

    // checks for Promise
    fn visit_mut_new_expr(&mut self, call: &mut NewExpr) {
        if let Expr::Ident(ident) = &*call.callee {
            if ident.sym.eq("Promise") {
                let error = format!("Promise is not supported.");
                HANDLER.with(|handler| handler.struct_span_err(call.span, &error).emit());
            }
        }
    }
}
