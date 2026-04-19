type Props = { schema: object | object[] };

export function JsonLd({ schema }: Props) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas
        .filter((s) => s && Object.keys(s).length > 0)
        .map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(s).replace(/</g, '\\u003c'),
            }}
          />
        ))}
    </>
  );
}
