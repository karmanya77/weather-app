export const Navigation = () => {
  const handleChange = (e: any) => {
    console.log(e.currentTarget);
  };
  return (
    <div>
      <ul>
        <li value="currentTemp" onClick={handleChange}>
          Current temprature
        </li>
        <li value="forecast" onClick={handleChange}>
          5 day forecast
        </li>
      </ul>
    </div>
  );
};
