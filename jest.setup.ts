// Explicitly load matchers in CI-friendly way
import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';

// Extend Jest expect with Testing Library matchers
(expect as any).extend(matchers);
