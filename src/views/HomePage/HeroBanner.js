import React from "react";
import {toast} from "react-toastify";
import {useMutation, useQueryClient} from "@tanstack/react-query";

import './HeroBanner.css';
import {Button} from "../../components";
import ImageAPIService from "../../modules/imageapi/imageapi.service";
import TextInput from "../../components/TextInput/TextInput";

function HeroBanner() {
  const queryClient = useQueryClient()

  const [imagePrompt, setImagePrompt] = React.useState('')
  const [formError, setFormError] = React.useState(false)

  const {mutateAsync} = useMutation({
    mutationFn: ImageAPIService.generateImageFromPrompt,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['images']})
    },
  })

  const handleImagePromptChange = (event) => {
    setFormError(false)
    setImagePrompt(event.target.value)
  }

  const handleImagePromptSubmit = () => {
    if (!imagePrompt) {
      return setFormError(true)
    }

    const mutationPromise = mutateAsync({image_prompt: imagePrompt})

    toast.promise(
      mutationPromise,
      {
        pending: 'Generating image... ⏳',
        success: 'Image generated successfully 🎉',
        error: 'Failed to generate image 😢'
      },
      {
        delay: 2000,
        position: toast.POSITION.BOTTOM_LEFT
      }
    )

    setImagePrompt('')
  }

  return (
    <div className="banner">
      <h1>Imaginator</h1>
      <p>Bring your imaginations to life using RunPod text to image API</p>

      <div className="search-container">
        <TextInput
          type="text"
          name="image_prompt"
          value={imagePrompt}
          onChange={handleImagePromptChange}
          placeholder="Enter your image prompt"/>
      </div>

      {formError && <span className="error-text">Image prompt is required</span>}

      <div className="button-container">
        <Button onClick={handleImagePromptSubmit}>Generate</Button>
      </div>
    </div>
  );
}

export default HeroBanner;
