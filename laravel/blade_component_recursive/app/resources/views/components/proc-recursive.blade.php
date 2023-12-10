<div style="display:flex; flex-direction: column;">
  <div>{{ $key }}：{{ $value }}</div>
  <div>{!! $htmlContents !!}</div>

  <div>
    @foreach($htmlLines as $index=>$line)
      {!! $line !!}
    @endforeach
  </div>

</div>

