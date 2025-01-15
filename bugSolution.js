```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
    return () => {
      console.log('Cleanup: count is', countRef.current); 
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```