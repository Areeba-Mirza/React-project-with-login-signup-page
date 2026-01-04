import { useState } from "react";
import axios from "axios";

function AdminReply() {
  const [reply, setReply] = useState({ userEmail: "", replyMessage: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setReply({ ...reply, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reply", reply);
      setStatus("Reply sent to user!");
      setReply({ userEmail: "", replyMessage: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending reply");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="userEmail"
        placeholder="User Email"
        value={reply.userEmail}
        onChange={handleChange}
        required
      />
      <textarea
        name="replyMessage"
        placeholder="Reply Message"
        value={reply.replyMessage}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Reply</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default AdminReply;
