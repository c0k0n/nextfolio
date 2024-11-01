import Image from "next/image";
import {metaData} from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={250}
          height={250}
          priority
        />

        <h1 className="mb-8 text-2xl font-medium tracking-tight">
            Hello, I'm {metaData.name}
        </h1>

        <div className="prose prose-neutral dark:prose-invert">
            <p>
                Welcome to my Dossier!
            </p>

            <p>
                Let me tell you about my profile and what I can offer.
            </p>

            <p>
                I'm a data science graduate with experience at
                <a
                target="_blank"
                className="no-underline"
                href="https://www.dksh.com/global-en/home" > DKSH
                </a>
                , where I blended expertise in Data Science and IT Service Management. My contributions included data wrangling, analysis, and report generation using
                <a
                target="_blank"
                className="no-underline"
                href="https://www.microsoft.com/en-us/power-platform/products/power-bi" > Power BI
                </a>
                .
            </p>

            <p>
                During my time at DKSH, I developed endpoint lifecycle processes across multiple countries and served as
                both a

                <a
                target="_blank"
                className="no-underline"
                href="https://en.wikipedia.org/wiki/DevOps"> DevOps
                </a> admin and

                <a
                    target="_blank"
                    className="no-underline"
                    href="https://en.wikipedia.org/wiki/IT_disaster_recovery"> ITDR
                </a> coordinator.
            </p>

            <p>
                I'm skilled in Power BI, data analysis, machine learning, Azure technologies, and development. Certified
                in Microsoft Fabric, Azure AI Document Intelligence, and Azure SQL Database, I’m passionate about data, cloud technologies, and development. I’m always open to collaboration.
            </p>
      </div>
    </section>
  );
}
