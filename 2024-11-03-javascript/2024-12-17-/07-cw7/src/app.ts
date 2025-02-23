document.getElementById("myForm").addEventListener("submit", (event) => {
  // when we use the keyword "as"
  // wa actually tell typescript: trust me, i know what  i am doing
  event.preventDefault();
  const myInput = document.getElementById("myInput") as HTMLInputElement;
  const result = myInput.value;
});

function test() {
  type Person = {
    name: string | undefined, //union type
    age: number | undefined, //
    birthdate: Date;
  };

  type Animal = {
    type: string;
    eat: Function;
  };
}
