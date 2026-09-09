// import submitForm from "./submitForm";/

export default function App() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.

      action='https://questions.greatfrontend.com/api/questions/contact-form'
      method='POST'
    >
      <input type='text' name='name' placeholder='Enter your name' required />
      <input
        type='email'
        name='email'
        placeholder='Enter your email'
        required
      />
      <textarea rows='10' cols='10' name='message'></textarea>
      <button type='submit'>send</button>
    </form>
  );
}
