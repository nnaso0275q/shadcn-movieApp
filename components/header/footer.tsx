import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="space-y-5 my-20">
      <div className="w-full bg-indigo-700 h-fit">
        <div className="py-10 px-20 flex justify-between">
          <div className="space-y-3">
            <img src="/Logo.svg"></img>
            <h1>© 2024 Movie Z. All Rights Reserved.</h1>
          </div>
          <div className="flex gap-[96px]">
            <div>
              <a>Contact information</a>
              <div className="flex items-center gap-2">
                <Mail></Mail>
                <div>
                  <h1>Email:</h1>
                  <h1>support@movieZ.com</h1>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone></Phone>
                <div>
                  <h1>Phone:</h1>
                  <h1>+3454354534</h1>
                </div>
              </div>
            </div>
            <div>
              <h1>Follow us</h1>
              <div className="flex gap-2">
              <a>Facebook</a>
              <a>Instagram</a>
              <a>Twitter</a>
              <a>Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
