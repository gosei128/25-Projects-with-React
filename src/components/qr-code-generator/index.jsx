import QRCode from "react-qr-code";
import { useState } from "react";
const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleClick = () => {
    setQrCode(input);
  };
  return (
    <div>
      <h1>QR Code Generator</h1>

      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-vale" size={400} value={qrCode} bgColor="#ffff" />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
