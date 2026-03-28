# Scratch


<div class="workshop-grid">

<div class="workshop-card">
<h2>😸 Scratch 2</h2>
<p></p>
<div class="links">
    <a href="./Scratch2/README">Scratch 2</a>
</div>
</div>

<div class="workshop-card">
<h2>😸 Scratch 3</h2>
<p></p>
<div class="links">
    <a href="./Scratch3/README">Scratch 3</a>
</div>
</div>

</div>


<style>
.workshop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.workshop-card {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.workshop-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(181, 20, 50, 0.1);
}

.workshop-icon {
  font-size: 40px;
  margin-bottom: 16px;
}

.workshop-card h3 {
  margin: 0 0 12px 0;
  color: var(--vp-c-white);
}

.workshop-card p {
  margin: 0 0 20px 0;
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
  flex-grow: 1;
}

.workshop-card a {
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.workshop-card a:hover {
  text-decoration: underline;
}

.links {
  font-size: 14px;
}
</style>
