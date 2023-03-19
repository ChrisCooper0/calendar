import Head from "next/head";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  useEffect(() => {
    (async function () {
      const cal: any = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#06b6d4" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Chris Cooper</title>
        <meta name="description" content="Chris Cooper" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <main className="flex flex-col justify-center items-center gap-14 w-full h-full mt-10 md:mt-16 px-5">
        <div id="blob"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="profile picture"
            src="https://chriscooper0.github.io/calendar/chris.jpeg"
            className="rounded-full w-32 h-32 outline-1 outline-cyan-500 outline"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-medium md:text-4xl text-white">
              Chris Cooper
            </h1>
            <div className="flex flex-col gap-1.5">
              <p className="font-extralight text-white">
                Hey, I&apos;m Chris 👋
              </p>
              <p className="font-extralight text-white">
                I&apos;m a Web Developer. I work with eCommerce companies to
                increase revenue (via on-page SEO) and improve the customer
                shopping experience.
              </p>
              <p className="font-extralight text-white">
                Book in a call with me.
              </p>
              <div className="flex flex-row gap-2">
                <a href="https://www.linkedin.com/in/chris--cooper/">
                  <FaLinkedin color="#0077b5" size={28} />
                </a>
                <a href="mailto:christopher.cooper@mail.com">
                  <HiOutlineMail color="whitesmoke" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Cal
          calLink={process.env.CALLINK ?? ""}
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        />
      </main>
    </>
  );
}
