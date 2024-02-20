import { Document, PDFDownloadLink, Page, StyleSheet, Text, View, StyleSheetgit git  } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import "./index.css"

const PDF = () => {
    const html = `
        <table>
            <tr>
                <td>Visitantes total</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>Visitantes masculinos</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Visitantes femininos</td>
                <td>600</td>
            </tr>
        </table>
    `;
    const stylus = StyleSheet.create({
        
    })
    return(
        <>
        <Document>
            <Page size={'A4'}>
                <View>
                    <Text>Hello World!</Text>
                </View>
                <Html>{html}</Html>
            </Page>
        </Document>
        </>
    );
}

const PageAdmin = () => {
    return(
        <>
            <header>
                <h2>LOGO</h2>
            </header>
            <main>
                <h3>
                    Painel
                    <PDFDownloadLink document={<PDF/>} fileName="BoasVindas.pdf">Baixar PDF</PDFDownloadLink>
                </h3>
            </main>
        </>
    )
}

export default PageAdmin;