import React from 'react';
import {ToastContainer} from 'react-toastify';
import {useQuery} from '@tanstack/react-query'

import './HomePage.css';
import HeroBanner from "./HeroBanner";
import {ImageCard, InfoCard} from "../../components";
import ImageAPIService from "../../modules/imageapi/imageapi.service";

function HomePage() {
  const {isPending, isError, data, error} = useQuery({
    queryKey: ['images'],
    queryFn: ImageAPIService.getAllImages
  })


  const LoadingState = () => (
    <InfoCard
      title="Loading..."
      subtitle="Fetching generated images"
    />
  )

  const ErrorState = () => (
    <InfoCard
      title="Failed to load images"
      subtitle={error?.message}
      subtitleClass="error-text"
    />
  )

  const EmptyState = () => (
    <InfoCard
      title="No images generated yet"
      subtitle="Type in a prompt to generate one. It's easy!"
    />
  )

  const GeneratedImages = () => (
    <div className="generated-images-container">
      {data.map((image) => (
        <ImageCard key={image.id} image={image}>
          <img src={image.image_url} alt={image.image_prompt}/>
        </ImageCard>
      ))}
    </div>
  )

  const getPageContent = () => {
    if (isPending) {
      return <LoadingState/>
    }

    if (isError) {
      return <ErrorState/>
    }

    if (!data.length > 0) {
      return <EmptyState/>
    }

    return <GeneratedImages/>
  }

  return (
    <>
      <HeroBanner/>

      {getPageContent()}

      <ToastContainer/>
    </>
  );
}

export default HomePage;
