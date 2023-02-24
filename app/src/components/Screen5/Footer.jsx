import "./footer.css";
import logo from "../../assets/atlantePng.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Footer() {
  return (
    <div className="footer text-white bg-[#12100E] py-10 flex justify-center gap-24">
      <div className="inline-block text-center">
        <img src={logo} alt="logo" className="w-[150px] mx-auto" />
        <div className="my-6">
          <h2>Gutemberg Uchôa de Araujo, 261 - Catolé</h2>
          <h2>Paraíba, PB - 58410-390</h2>
        </div>
        <div className="flex justify-center">
          <h1 className="font-black">SIGA A GENTE: </h1>
          <img src={logo} alt="logo" className="w-[50px]" />
          <img src={logo} alt="logo" className="w-[50px]" />
          <img src={logo} alt="logo" className="w-[50px]" />
        </div>
      </div>

      <div className="containerContatos flex flex-col gap-5">
        <h1 className="telephone font-black">CONTATOS:</h1>
        <div className="flex gap-2">
          <LocalPhoneIcon />
          <h2>(83)0000-0000</h2>
          <h1>.</h1>
          <h2>(83)0000-0000</h2>
        </div>

        <div className="whatsApp flex gap-2">
          <WhatsAppIcon />
          <h2>(83)90000-0000</h2>
          <h1>.</h1>
          <h2>(83)90000-0000</h2>
        </div>

        <div className="horarios flex gap-2 items-start">
          <AccessTimeIcon />
          <div className="teste flex flex-col gap-2">
            <h2>Segunda a sexta - Das 06:00 - 12:00 || 14:00 - 22:00</h2>
            <h2>Sabados - Das 06:00 - 12:00</h2>
            <h2>Domingos - Fechada</h2>
            <h2>Feriados - Fechada</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
