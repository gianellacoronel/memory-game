export default function Option({
  valueArray,
}: {
  valueArray: { name: string; value: string }[] | { value: string }[];
}) {
  const optionEl = valueArray.map(({ name, value }) => (
    <option key={value} value={value}>
      {!name ? value : name}
    </option>
  ));

  return <>{optionEl}</>;
}
