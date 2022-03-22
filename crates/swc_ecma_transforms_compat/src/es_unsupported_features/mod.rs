use swc_ecma_visit::Fold;

pub use self::unsupported::unsupported;

pub mod unsupported;

#[tracing::instrument(level = "trace", skip_all)]
pub fn es_unsupported_features(config: Config) -> impl Fold {
    unsupported()
}

#[derive(Debug, Clone, Default)]
pub struct Config {}
