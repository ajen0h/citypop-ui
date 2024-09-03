import AlertComponent from "@/components/alert";
import ArticleWrapper from "@/components/article-wrapper";
import ButtonComponent from "@/components/button";
import CardComponent from "@/components/card";
import CheckboxComponent from "@/components/checkbox";
import InputComponent from "@/components/input";
import SelectComponent from "@/components/select";
import Spinner from "@/components/spinner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">

      <ArticleWrapper href="/alert">
        <AlertComponent />
      </ArticleWrapper>
      <ArticleWrapper href="/input">
        <InputComponent />
      </ArticleWrapper>

      {/* <ButtonComponent>Hola</ButtonComponent>
    <Spinner />
    <CardComponent/>
    <CheckboxComponent/>
    <SelectComponent/>
     */}
    </main>
  )
}
