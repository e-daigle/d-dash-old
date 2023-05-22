export const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "Name",
      field: "name",
      filter: (input: string): string => {
        // Define the condition for filtering (e.g., excluding numbers)
        const filteredString = input.slice(0,10);
        console.log("A")
        return filteredString;
      }
    },
    {
      title: "Last Name",
      field: "lastname",
    },
    {
      title: "Age",
      field: "age",
    },
  ];