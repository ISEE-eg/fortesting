import AfterSaleServices from "@/components/about/AfterSaleServices";
import CeoMessage from "@/components/about/CeoMessage";
import Certificates from "@/components/about/Certificates";
import CompanyInfo from "@/components/about/CompanyInfo";
import CompanyVision from "@/components/about/CompanyVision";
import SupplyChain from "@/components/about/SupplyChain";
import InternalHeader from "@/components/common/InternalHeader";
import { Box, Container } from "@chakra-ui/react";

export default function About() {
  return (
    <Box pt={[20, 20, 'initial']}>
      <InternalHeader
        bgImage={'/about-page-header.png'}
        localizationKey="about" />

      <CompanyInfo />
      <CompanyVision />
      <CeoMessage />
      <Certificates />
      <SupplyChain />
      <AfterSaleServices />
    </Box>
  )
}
