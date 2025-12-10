import { Chapter, LayerConfig } from '@/types/story';
import {
  parksLayer,
  riversLayer,
  schoolsLayer,
  busStopsLayer,
  bikeRoutesLayer
} from './mockLayers';
import {
  parksStyle,
  parksOutlineStyle,
  riversStyle,
  schoolsStyle,
  busStopsStyle,
  bikeRoutesStyle
} from './mockStyles';

// 1. Define all available layers
export const storyLayers: Record<string, LayerConfig> = {
  parks: {
    id: 'parks',
    data: parksLayer,
    style: parksStyle,
    secondaryStyle: parksOutlineStyle
  },
  rivers: {
    id: 'rivers',
    data: riversLayer,
    style: riversStyle
  },
  schools: {
    id: 'schools',
    data: schoolsLayer,
    style: schoolsStyle
  },
  busStops: {
    id: 'busStops',
    data: busStopsLayer,
    style: busStopsStyle
  },
  bikeRoutes: {
    id: 'bikeRoutes',
    data: bikeRoutesLayer,
    style: bikeRoutesStyle
  }
};

// 2. Define the chapters (the sequence of the story)
export const storyChapters: Chapter[] = [
  {
    id: 'intro',
    slug: 'intro',
    title: 'Urban Ecosystems',
    description: 'Exploring the diverse infrastructure and natural elements that define our city landscape.',
    alignment: 'center',
    camera: {
      center: [-73.985, 40.770],
      zoom: 11,
      pitch: 0,
      bearing: 0
    },
    visibleLayers: ['rivers'] // Start with just the geography (river)
  },
  {
    id: 'green-spaces',
    slug: 'green-spaces',
    title: 'Green Lungs',
    description: 'Our city parks provide essential recreational space and environmental benefits.',
    alignment: 'left',
    camera: {
      center: [-73.970, 40.785], // Focus on Central Park
      zoom: 13,
      pitch: 45,
      bearing: -15
    },
    visibleLayers: ['rivers', 'parks']
  },
  {
    id: 'education',
    slug: 'education',
    title: 'Educational Hubs',
    description: 'A network of schools serves the growing population in these residential districts.',
    alignment: 'right',
    camera: {
      center: [-73.975, 40.760],
      zoom: 13.5,
      pitch: 30,
      bearing: 20
    },
    visibleLayers: ['parks', 'schools'] // Rivers fade out, parks stay as context
  },
  {
    id: 'transport',
    slug: 'transport',
    title: 'Connected Transit',
    description: 'An integrated system of bike routes and bus stops ensures seamless mobility.',
    alignment: 'left',
    camera: {
      center: [-73.985, 40.750],
      zoom: 14,
      pitch: 55,
      bearing: -10
    },
    visibleLayers: ['parks', 'bikeRoutes', 'busStops']
  },
  {
    id: 'overview',
    slug: 'overview',
    title: 'The Complete Picture',
    description: 'All these elements come together to create a vibrant, living city.',
    alignment: 'center',
    camera: {
      center: [-73.980, 40.770],
      zoom: 12,
      pitch: 20,
      bearing: 0
    },
    visibleLayers: ['rivers', 'parks', 'schools', 'bikeRoutes', 'busStops']
  }
];
