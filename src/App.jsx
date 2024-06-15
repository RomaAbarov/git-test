import { useForm } from "react-hook-form";
import "./App.scss";

function App() {
  const {
    register, //1-f для привязки полей,
    handleSubmit, //2 - f для приввязки формы,
    formState: { errors, isValid }, //3 - объект состояния формы
    reset,
    control,
  } = useForm({
    mode: "onBlur",
  });

  // const emailError = formState.errors["e-mail"]?.message;
  // const messageError = formState.errors["message"]?.message;

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <>
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input
          type="email"
          placeholder="Enter e-mail"
          {...register("e-mail", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid message",
            },
          })}
        /> */}
        {/* {emailError && <p>{emailError}</p>} */}

        <input
          type="text"
          {...register("firstName", {
            required: "обязательно введи",
            minLength: {
              value: 5,
              message: "не меньше 5 ",
            },
          })}
        />
        <div>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
        </div>

        <textarea
          placeholder="Enter message"
          {...register("message", {
            required: "This field is required",
          })}
        ></textarea>
        {/* {messageError && <p>{messageError}</p>} */}

        <button type="submit" disabled={!isValid}>
          Send
        </button>
      </form>
    </>
  );
}

export default App;
