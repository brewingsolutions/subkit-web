# Internal Services owns public product data

Subkit's Pricing Catalog, Roadmap, System Status, and public REST contract will be authoritative in `subkit-internal-services`; the Public Site consumes them through REST operations described by OpenAPI. This avoids duplicating commercial and operational truth in presentation clients while allowing OpenAPI-generated, type-safe clients across Subkit repositories.

