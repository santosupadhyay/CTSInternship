import { ToastContainer, toast } from 'react-toastify';

export default function Toast() {
  const notify = () => toast('Thanks for the confirmation mate!');

  return (
    <div className="">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}