function FruitList() {
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Apple",
    "Banana",
    "Cherry",
    "Date",
  ];
  return (
    <ol>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ol>
    // <ol>
    // <ol>
    //   {fruits.map((fruit, index) => (
    //     <li key={`${fruit}-${index}`}>{fruit}</li>
    //   ))}
    // </ol>
  );
}

export default FruitList;
