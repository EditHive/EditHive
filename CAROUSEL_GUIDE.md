# Carousel/Slider Implementation Guide

This guide explains how to use the carousel components implemented in your EditHive website.

## Components Created

### 1. Base Carousel Component (`components/ui/carousel.tsx`)
The foundational carousel component built with Embla Carousel React. It provides:
- Horizontal and vertical orientation support
- Keyboard navigation (arrow keys)
- Accessible carousel structure
- Customizable options and plugins
- Navigation buttons (Previous/Next)

### 2. Example Carousel Components

#### Testimonials Carousel (`components/testimonials-carousel.tsx`)
A testimonials section featuring customer reviews in card format.

#### Portfolio Carousel (`components/portfolio-carousel.tsx`)
A showcase for your work/projects with video thumbnails, descriptions, and tags.

#### Hero Carousel (`components/hero-carousel.tsx`)
A full-screen hero section with autoplay functionality and text overlays.

## Basic Usage

### Simple Carousel
```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function SimpleCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

### Multiple Items Per View
```tsx
<Carousel className="w-full">
  <CarouselContent className="-ml-2 md:-ml-4">
    {items.map((item, index) => (
      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        {/* Your item content */}
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### With Options
```tsx
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
  className="w-full"
>
  {/* Carousel content */}
</Carousel>
```

### With Autoplay
```tsx
import Autoplay from "embla-carousel-autoplay"

export function AutoplayCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {/* Carousel content */}
    </Carousel>
  )
}
```

## Carousel Options

The carousel supports all Embla Carousel options:

- `align`: "start" | "center" | "end"
- `axis`: "x" | "y"
- `direction`: "ltr" | "rtl"
- `dragFree`: boolean
- `loop`: boolean
- `skipSnaps`: boolean
- `containScroll`: "trimSnaps" | "keepSnaps" | false

## Available Plugins

- **Autoplay**: Automatically advances slides
- **Class Names**: Adds classes based on carousel state
- **Fade**: Fade transition between slides

## Responsive Breakpoints

Use Tailwind CSS classes to make carousels responsive:

```tsx
<CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
  {/* Content shows 1 item on mobile, 2 on md, 3 on lg */}
</CarouselItem>
```

## Adding to Your Website

### 1. Replace Hero Section
To use the hero carousel, replace your existing hero section in `app/page.tsx`:

```tsx
import HeroCarousel from "@/components/hero-carousel"

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      {/* Other sections */}
    </main>
  )
}
```

### 2. Add Testimonials Section
Add testimonials after your existing sections:

```tsx
import TestimonialsCarousel from "@/components/testimonials-carousel"

export default function Home() {
  return (
    <main>
      {/* Existing sections */}
      <TestimonialsCarousel />
      {/* Other sections */}
    </main>
  )
}
```

### 3. Add Portfolio Section
Replace or enhance your work section:

```tsx
import PortfolioCarousel from "@/components/portfolio-carousel"

export default function Home() {
  return (
    <main>
      {/* Existing sections */}
      <PortfolioCarousel />
      {/* Other sections */}
    </main>
  )
}
```

## Customization

### Styling Navigation Buttons
```tsx
<CarouselPrevious className="left-4 bg-blue-600 text-white border-blue-600" />
<CarouselNext className="right-4 bg-blue-600 text-white border-blue-600" />
```

### Custom Item Spacing
```tsx
<CarouselContent className="-ml-6">
  <CarouselItem className="pl-6">
    {/* Content */}
  </CarouselItem>
</CarouselContent>
```

### Hide Navigation on Mobile
```tsx
<CarouselPrevious className="hidden sm:flex" />
<CarouselNext className="hidden sm:flex" />
```

## Accessibility Features

The carousel includes:
- ARIA labels and roles
- Keyboard navigation support
- Screen reader announcements
- Focus management

## Performance Tips

1. Use `loading="lazy"` for images in carousel items
2. Limit the number of slides for better performance
3. Use appropriate image sizes and formats
4. Consider using `IntersectionObserver` for heavy content

## Troubleshooting

### Common Issues

1. **Navigation buttons not showing**: Ensure parent container has enough padding
2. **Items not sliding**: Check that `CarouselContent` and `CarouselItem` are properly nested
3. **Autoplay not working**: Make sure the autoplay plugin is imported and configured correctly

### Debug Mode
Add this to see carousel state:

```tsx
const [api, setApi] = useState<CarouselApi>()

<Carousel setApi={setApi}>
  {/* Content */}
</Carousel>

// Log current slide
useEffect(() => {
  if (api) {
    console.log("Current slide:", api.selectedScrollSnap())
  }
}, [api])
```