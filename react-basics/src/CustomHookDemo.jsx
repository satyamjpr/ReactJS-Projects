import React from 'react';
import { useFetch } from './hooks/useFetch';

/**
 * CustomHookDemo Component
 * Consumes the 'useFetch' custom hook to display live posts cleanly.
 */
function CustomHookDemo() {
  // Utilizing Custom Hook in 1 clean line!
  const { data: posts, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div style={{
      border: "2px solid #e83e8c",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "500px",
      margin: "20px 0"
    }}>
      <h3>Day 8: Custom Hooks (`useFetch`)</h3>

      <button
        onClick={refetch}
        disabled={loading}
        style={{
          padding: "8px 12px",
          backgroundColor: loading ? "#6c757d" : "#e83e8c",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
          marginBottom: "15px"
        }}
      >
        {loading ? "Fetching Posts..." : "Refetch Posts"}
      </button>

      {/* Loading View */}
      {loading && <p style={{ color: "#e83e8c" }}>⏳ Fetching posts via custom hook...</p>}

      {/* Error View */}
      {error && <p style={{ color: "#dc3545" }}>⚠️ Error: {error}</p>}

      {/* Success View */}
      {!loading && !error && posts && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {posts.slice(0, 4).map((post) => (
            <li 
              key={post.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                marginBottom: "5px"
              }}
            >
              <strong style={{ textTransform: "capitalize", color: "#333" }}>
                {post.id}. {post.title}
              </strong>
              <p style={{ margin: "5px 0 0 0", fontSize: "13px", color: "#6c757d" }}>
                {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomHookDemo;