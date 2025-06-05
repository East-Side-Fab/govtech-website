import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './styles.module.css';

interface Topic {
  id: string;
  title: string;
  description: string;
  link: string;
}

const TopicCarousel = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref for the main container for keyboard events
  const autoRotateDelay = 4500;

  useEffect(() => {
    fetch('data/topics.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Topic[]) => {
        if (data && data.length > 0) {
          setTopics(data);
        } else {
          setTopics([]);
          setError('No topics found or data is empty.');
        }
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("Failed to fetch topics:", e);
        setError('Failed to load topics. Please try again later.');
        setIsLoading(false);
      });
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === topics.length - 1 ? 0 : prevIndex + 1
    );
  }, [topics.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topics.length - 1 : prevIndex - 1
    );
  }, [topics.length]);

  useEffect(() => {
    if (topics.length > 0 && !isPaused) {
      intervalRef.current = setInterval(goToNext, autoRotateDelay);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [goToNext, topics.length, isPaused, autoRotateDelay]);

  // Keyboard navigation for arrow keys
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement || topics.length <= 1) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    // Need to make the carousel container focusable to receive key events directly
    // or attach listener to document if carousel is not naturally focusable.
    // For simplicity, let's assume the container can be focused (e.g. by adding tabIndex="0" to it)
    // Or, if buttons are primary controls, they already handle clicks and can have keydown too.
    // Attaching to the carousel container itself:
    carouselElement.setAttribute('tabindex', '0'); // Make it focusable
    carouselElement.addEventListener('keydown', handleKeyDown);

    return () => {
      carouselElement.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrev, goToNext, topics.length]);


  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTopicClick = () => {
    if (topics.length > 0 && topics[currentIndex]) {
      window.location.href = topics[currentIndex].link;
    }
  };

  const currentTopic = topics[currentIndex];

  if (isLoading) {
    return <div className={styles.carouselContainer}><p>Loading topics...</p></div>;
  }

  if (error) {
    return <div className={styles.carouselContainer}><p>{error}</p></div>;
  }

  if (!currentTopic && topics.length > 0) {
    // This case might happen if currentIndex is out of sync briefly
    // or topics array got emptied unexpectedly.
    // Showing an error/empty state while recovery logic runs in useEffect.
    return <div className={styles.carouselContainer}><p>No topic to display.</p></div>;
  }

  if (topics.length === 0 && !isLoading) { // Adjusted this condition
    return <div className={styles.carouselContainer}><p>No topics available at the moment.</p></div>;
  }


  return (
    <div
      ref={carouselRef} // Assign ref here
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel" // More specific role for carousel
      aria-label="Hackathon Challenge Topics" // Label for the carousel itself
    >
      <div
        key={currentTopic?.id}
        className={styles.topicDisplay}
        onClick={handleTopicClick}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleTopicClick(); }}
        style={{cursor: 'pointer'}}
        aria-live="polite" // Announce changes
        aria-atomic="true" // Announce whole region
        // aria-relevant="text" // Default is additions text removals, so text is fine
      >
        {currentTopic ? (
          <>
            <h2>{currentTopic.title}</h2>
            <p>{currentTopic.description}</p>
          </>
        ) : (
          <p>Topic information is currently unavailable.</p> // Fallback if currentTopic is somehow undefined
        )}
      </div>

      {topics.length > 1 && (
        <>
          <button
            className={styles.prevButton}
            onClick={goToPrev}
            aria-label="Previous topic"
            aria-controls="topic-display"
          >
            &lt;
          </button>
          <button
            className={styles.nextButton}
            onClick={goToNext}
            aria-label="Next topic"
            // Consider adding aria-controls
          >
            &gt;
          </button>
        </>
      )}
      {/* TODO: Add swipe functionality for touch devices in the future. */}
    </div>
  );
};

export default TopicCarousel;
